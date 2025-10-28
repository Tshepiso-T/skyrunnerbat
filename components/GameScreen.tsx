import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Chapter, GameplayElement } from '../types';
import { OrbIcon, TotemIcon, NectarIcon, SwitchIcon, PipIcon, LunaIcon } from './Icons';
import { LinearGradient } from 'expo-linear-gradient';
import Player from './Player';
import Controls from './Controls';

interface GameScreenProps {
  chapter: Chapter;
  totalOrbs: number;
  onChapterComplete: () => void;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const GRAVITY = 0.5;
const PLAYER_SPEED = 5;
const JUMP_FORCE = -12;
const GROUND_HEIGHT = SCREEN_HEIGHT * 0.9;
const PLAYER_SIZE = 50;
const ELEMENT_SIZE = 64;

const GRADIENT_COLORS = {
  1: ['#a6d8ff', '#78bfff'],
  2: ['#a7b0bd', '#808c9e'],
  3: ['#fecdd3', '#c084fc'],
  4: ['#718096', '#2d3748'],
  5: ['#ef4444', '#f97316', '#eab308'],
  6: ['#312e81', '#000000'],
};

const renderElement = (el: GameplayElement, collected: boolean, activated: boolean) => {
  const isOrb = el.type === 'orb';
  const isVisible = !collected;

  if (!isVisible) return null;

  const baseProps = {
    key: el.id,
    width: ELEMENT_SIZE,
    height: ELEMENT_SIZE,
  };
  
  let icon;
  switch (el.type) {
    case 'orb': icon = <OrbIcon {...baseProps} color="#FBBF24" />; break;
    case 'totem': icon = <TotemIcon {...baseProps} activated={activated} />; break;
    case 'nectar': icon = <NectarIcon {...baseProps} color="#FB7185" />; break;
    case 'switch': icon = <SwitchIcon {...baseProps} activated={activated} />; break;
    case 'orb-slot': icon = <View style={styles.orbSlot}><OrbIcon width={40} height={40} color="rgba(125, 211, 252, 0.5)"/></View>; break;
    default: return null;
  }

  return <View style={[styles.element, { top: el.position.top, left: el.position.left }]}>{icon}</View>;
};


const GameScreen: React.FC<GameScreenProps> = ({ chapter, onChapterComplete, totalOrbs }) => {
  const [collectedElements, setCollectedElements] = useState<Set<string>>(new Set());
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [playerPosition, setPlayerPosition] = useState({ x: SCREEN_WIDTH * 0.1, y: GROUND_HEIGHT - PLAYER_SIZE });
  const playerVelocity = useRef({ x: 0, y: 0 });
  const controls = useRef({ left: false, right: false });
  // Fix: Use ReturnType<typeof setInterval> to avoid NodeJS namespace error and correctly infer the timer ID type.
  const gameLoopRef = useRef<ReturnType<typeof setInterval>>();

  // Fix: Explicitly type `id` as string to fix incorrect type inference.
  const itemsCollectedCount = Array.from(collectedElements).filter((id: string) => !id.includes('orb')).length;
  const isChapterTaskComplete = itemsCollectedCount >= chapter.collectGoal;

  const handleJump = useCallback(() => {
    // Allow jumping only if on the ground
    if (playerPosition.y >= GROUND_HEIGHT - PLAYER_SIZE - 1) {
       playerVelocity.current.y = JUMP_FORCE;
    }
  }, [playerPosition.y]);

  useEffect(() => {
    gameLoopRef.current = setInterval(() => {
      // Horizontal Movement
      playerVelocity.current.x = 0;
      if (controls.current.left) playerVelocity.current.x = -PLAYER_SPEED;
      if (controls.current.right) playerVelocity.current.x = PLAYER_SPEED;
      
      // Gravity
      playerVelocity.current.y += GRAVITY;

      setPlayerPosition(prevPos => {
        let newX = prevPos.x + playerVelocity.current.x;
        let newY = prevPos.y + playerVelocity.current.y;

        // Ground collision
        if (newY > GROUND_HEIGHT - PLAYER_SIZE) {
          newY = GROUND_HEIGHT - PLAYER_SIZE;
          playerVelocity.current.y = 0;
        }

        // Screen bounds
        if (newX < 0) newX = 0;
        if (newX > SCREEN_WIDTH - PLAYER_SIZE) newX = SCREEN_WIDTH - PLAYER_SIZE;
        
        // Element Collision Detection
        const playerBounds = { x: newX, y: newY, width: PLAYER_SIZE, height: PLAYER_SIZE };
        chapter.elements.forEach(el => {
          if (collectedElements.has(el.id)) return;
          
          const elX = parseFloat(el.position.left) / 100 * SCREEN_WIDTH;
          const elY = parseFloat(el.position.top) / 100 * SCREEN_HEIGHT;
          const elBounds = { x: elX, y: elY, width: ELEMENT_SIZE, height: ELEMENT_SIZE };

          if (playerBounds.x < elBounds.x + elBounds.width &&
              playerBounds.x + playerBounds.width > elBounds.x &&
              playerBounds.y < elBounds.y + elBounds.height &&
              playerBounds.y + playerBounds.height > elBounds.y) {
            handleElementCollision(el);
          }
        });
        
        return { x: newX, y: newY };
      });
    }, 16); // ~60fps

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [chapter.elements, collectedElements]);
  
  const handleElementCollision = (el: GameplayElement) => {
    if (el.type === 'orb') {
      if ((chapter.collectGoal > 1 && !isChapterTaskComplete) || chapter.id === 6) return;
      onChapterComplete();
    } else if (el.type === 'orb-slot' && totalOrbs === 5) { // Chapter 6 logic
      onChapterComplete();
    } else {
      setCollectedElements(prev => new Set(prev).add(el.id));
    }
  };

  return (
    <LinearGradient colors={GRADIENT_COLORS[chapter.id]} style={styles.container}>
      <View style={{...styles.hud, top: 50}}>
        <Text style={styles.chapterTitle}>{chapter.title}</Text>
        <Text style={styles.chapterGoal}>{chapter.goal}</Text>
         {chapter.collectGoal > 1 && (
            <Text style={styles.collectCounter}>{itemsCollectedCount} / {chapter.collectGoal}</Text>
        )}
      </View>
      
      {chapter.elements.map(el => {
        const isCollected = collectedElements.has(el.id);
        if(el.type === 'orb' && chapter.collectGoal > 1 && !isChapterTaskComplete) {
          return <View key={el.id} style={[styles.element, { top: el.position.top, left: el.position.left }]}><OrbIcon width={ELEMENT_SIZE} height={ELEMENT_SIZE} color="rgba(156, 163, 175, 0.5)" /></View>;
        }
        return renderElement(el, isCollected, isCollected);
      })}

      <Player position={playerPosition} />
      
      <Controls 
        onDirectionChange={(dir, pressed) => controls.current[dir] = pressed}
        onJump={handleJump}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  hud: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  chapterTitle: { fontFamily: 'FredokaOne', fontSize: 32, color: '#FBBF24', textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 2 },
  chapterGoal: { fontFamily: 'Nunito', fontSize: 16, color: '#F1F5F9' },
  collectCounter: { fontFamily: 'FredokaOne', fontSize: 20, color: 'white', marginTop: 4 },
  element: { position: 'absolute', transform: [{ translateX: -ELEMENT_SIZE/2 }, { translateY: -ELEMENT_SIZE/2 }] },
  orbSlot: { width: ELEMENT_SIZE, height: ELEMENT_SIZE, borderWidth: 4, borderColor: '#7DD3FC', borderStyle: 'dashed', borderRadius: 50, justifyContent: 'center', alignItems: 'center' },
});

export default GameScreen;

// Fix: Declare require for TypeScript to handle asset imports.
declare var require: any;

import React, { useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { GameState } from './types';
import { CHAPTERS } from './constants';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import CutsceneScreen from './components/CutsceneScreen';
import EndScreen from './components/EndScreen';
import { OrbIcon } from './components/Icons';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [totalOrbs, setTotalOrbs] = useState(0);

  const [fontsLoaded] = useFonts({
    'FredokaOne': require('./assets/FredokaOne-Regular.ttf'),
    'Nunito': require('./assets/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/Nunito-Bold.ttf'),
  });

  const handleStartGame = useCallback(() => {
    setCurrentChapterIndex(0);
    setTotalOrbs(0);
    setGameState(GameState.PLAYING);
  }, []);

  const handleChapterComplete = useCallback(() => {
    setTotalOrbs(prev => prev + 1);
    setGameState(GameState.CUTSCENE);
  }, []);

  const handleNext = useCallback(() => {
    if (currentChapterIndex < CHAPTERS.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      setGameState(GameState.PLAYING);
    } else {
      setGameState(GameState.END);
    }
  }, [currentChapterIndex]);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.START:
        return <StartScreen onStart={handleStartGame} />;
      case GameState.PLAYING:
        return (
          <GameScreen
            key={CHAPTERS[currentChapterIndex].id}
            chapter={CHAPTERS[currentChapterIndex]}
            onChapterComplete={handleChapterComplete}
            totalOrbs={totalOrbs}
          />
        );
      case GameState.CUTSCENE:
        return (
          <CutsceneScreen
            chapter={CHAPTERS[currentChapterIndex]}
            onNext={handleNext}
          />
        );
      case GameState.END:
        return <EndScreen onRestart={handleStartGame} />;
      default:
        return <StartScreen onStart={handleStartGame} />;
    }
  };

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.hudContainer}>
        <View style={styles.orbCounter}>
          <OrbIcon width={32} height={32} color="#FBBF24" />
          <Text style={styles.hudText}>{totalOrbs} / {CHAPTERS.length}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>🌈 Sky Runner</Text>
        </View>
      </View>
      {renderGameState()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
  },
  hudContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 50,
    pointerEvents: 'none',
  },
  orbCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  titleContainer: {
     backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  hudText: {
    fontFamily: 'FredokaOne',
    fontSize: 24,
    color: 'white',
    marginLeft: 8,
  },
  titleText: {
    fontFamily: 'FredokaOne',
    fontSize: 24,
    color: '#7DD3FC',
  },
});

export default App;

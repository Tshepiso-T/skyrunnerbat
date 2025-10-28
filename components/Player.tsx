import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LunaIcon } from './Icons';

interface PlayerProps {
  position: {
    x: number;
    y: number;
  };
}

const PLAYER_SIZE = 50;

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <View style={[styles.container, { left: position.x, top: position.y }]}>
      <LunaIcon style={{ fontSize: 40 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Player;

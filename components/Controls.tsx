import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

interface ControlsProps {
  onDirectionChange: (direction: 'left' | 'right', pressed: boolean) => void;
  onJump: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onDirectionChange, onJump }) => {
  return (
    <View style={styles.container}>
      <View style={styles.directionContainer}>
        <Pressable
          style={styles.button}
          onPressIn={() => onDirectionChange('left', true)}
          onPressOut={() => onDirectionChange('left', false)}
        >
          <Text style={styles.buttonText}>{'<'}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPressIn={() => onDirectionChange('right', true)}
          onPressOut={() => onDirectionChange('right', false)}
        >
          <Text style={styles.buttonText}>{'>'}</Text>
        </Pressable>
      </View>
      <Pressable style={[styles.button, styles.jumpButton]} onPress={onJump}>
        <Text style={styles.buttonText}>{'^'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  directionContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  jumpButton: {},
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Controls;

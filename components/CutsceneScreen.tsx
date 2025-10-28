import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Chapter } from '../types';

interface CutsceneScreenProps {
  chapter: Chapter;
  onNext: () => void;
}

const GRADIENT_COLORS = {
  1: ['#38bdf8', '#3b82f6'],
  2: ['#737d8f', '#4a5568'],
  3: ['#f9a8d4', '#a78bfa'],
  4: ['#4b5563', '#1f2937'],
  5: ['#dc2626', '#f59e0b'],
  6: ['#4338ca', '#1e1b4b'],
};

const CutsceneScreen: React.FC<CutsceneScreenProps> = ({ chapter, onNext }) => {
  return (
    <LinearGradient colors={GRADIENT_COLORS[chapter.id]} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>Chapter Complete!</Text>
          <Text style={styles.quote}>"{chapter.cutscene}"</Text>
          <TouchableOpacity onPress={onNext} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentBox: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 30,
    borderRadius: 20,
    maxWidth: 600,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'FredokaOne',
    fontSize: 40,
    color: '#FBBF24',
    marginBottom: 16,
  },
  quote: {
    fontFamily: 'Nunito',
    fontStyle: 'italic',
    fontSize: 22,
    color: '#E5E7EB',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: 'FredokaOne',
    fontSize: 24,
    color: 'white',
  },
});

export default CutsceneScreen;

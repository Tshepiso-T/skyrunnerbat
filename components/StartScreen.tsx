import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://picsum.photos/seed/sky-start/1200/800' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(30, 27, 47, 0.8)', 'rgba(20, 15, 35, 0.9)']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.title}>🌈 Sky Runner</Text>
            <Text style={styles.subtitle}>The Lost City</Text>
            <Text style={styles.description}>
              Help Luna rebuild the shattered Sky City by exploring floating realms, solving puzzles, and collecting lost power orbs. A grand adventure awaits above the clouds!
            </Text>
            <TouchableOpacity onPress={onStart} style={styles.button}>
              <Text style={styles.buttonText}>Start Adventure</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    maxWidth: 600,
  },
  title: {
    fontFamily: 'FredokaOne',
    fontSize: 64,
    color: '#7DD3FC',
    textShadowColor: 'rgba(125, 211, 252, 0.4)',
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'FredokaOne',
    fontSize: 24,
    color: '#F472B6',
    marginTop: 8,
    marginBottom: 24,
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: 18,
    color: '#E5E7EB',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: 'FredokaOne',
    fontSize: 28,
    color: '#374151',
  },
});

export default StartScreen;

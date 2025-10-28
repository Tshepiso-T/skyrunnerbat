import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://picsum.photos/seed/sky-end/1200/800' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(16, 185, 129, 0.7)', 'rgba(12, 74, 110, 0.9)']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Congratulations, Sky Runner!</Text>
            <Text style={styles.description}>
              You have restored the Great Crystal and brought the Sky City back to life. Its dreams, and yours, now shine brightly amongst the stars.
            </Text>
            <Text style={styles.quote}>
              Pip: "You did it!" {"\n"} Luna: "The city lives again… and so do its dreams."
            </Text>
            <TouchableOpacity onPress={onRestart} style={styles.button}>
              <Text style={styles.buttonText}>Play Again</Text>
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
    fontSize: 56,
    color: '#6EE7B7',
    textShadowColor: 'rgba(110, 231, 183, 0.4)',
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 15,
    textAlign: 'center',
    marginBottom: 24,
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#E5E7EB',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 28,
  },
  quote: {
    fontFamily: 'FredokaOne',
    fontSize: 22,
    color: '#FBBF24',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 32,
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

export default EndScreen;

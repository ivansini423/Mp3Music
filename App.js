import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, TextInput } from "react-native";

function App() {
  const [form, setForm] = useState({ username: '', password: '' });
  const scaleValue = new Animated.Value(1);
  const fadeValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.background}>
      <Animated.View style={[styles.content, { opacity: fadeValue }]}>
        <Image
          style={styles.image}
          source={require('./assets/logomp3.png')}          
        />
        <Text style={styles.title}>Bienvenido a BeatWave</Text>
        <Text style={styles.subtitle}>Disfruta de tu música favorita en cualquier momento y lugar.</Text>

        

        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <TouchableOpacity
            style={styles.button}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffcc00',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '85%',
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: 'white',
  },
  button: {
    height: 65,
    width: 180,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {

    color: '#121212',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;

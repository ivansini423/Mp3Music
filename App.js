import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

/*Jeshua */
export default function App() {


  const [form, setForm] = useState({ username: '', password: '' })

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.Text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
  }
});

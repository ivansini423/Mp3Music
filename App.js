import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

/*Jeshua */
export default function App() {

  const [form, setForm]= useState({username:'', password:''})
  
  useEffect(() => {
     /* Aqui se pondra la url */
    fetch('https://example.com/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const handleChange=(name, value)=>{
    setForm({...form, [name]:value})
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

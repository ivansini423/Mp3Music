import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

/*Jeshua */
export default function App() {




  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const response = await fetch('http://192.168.100.8:3000/');
  //       const data = await response.json();
  //       console.log('Servidor:', data);
  //       Alert.alert('Servidor dice:', data.mensaje);
  //     } catch (error) {
  //       console.error('Error al conectar con el servidor:', error);
  //       Alert.alert('Error', 'No se pudo conectar al servidor');
  //     }
  //   };

  //   fetchApi();
  // }, []);

  // const handleChange = (name, value) => {
  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch('http://192.168.100.8:3000/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       Alert.alert('Éxito', data.mensaje);
  //     } else {
  //       Alert.alert('Error', data.mensaje);
  //     }
  //   } catch (error) {
  //     console.error('Error al hacer login:', error);
  //     Alert.alert('Error', 'No se pudo iniciar sesión');
  //   }
  // };
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

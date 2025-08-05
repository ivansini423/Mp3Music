import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";

function Login({ navigation }){

    const [form, setForm] = useState({userName: '', gmail: '', password: ''});
    // Agregamos un estado para manejar los mensajes de error
    const [error, setError] = useState(null);

    const onChangeText = (key, value) => {
        // Limpiamos el error cuando el usuario empieza a escribir de nuevo
        if (error) setError(null);
        setForm(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const sendForm = () => {
        /**
         * Funcion para enviar el formulario de inicio de sesion
         * Aquí iría la lógica para comunicarse con tu backend.
         */
        console.log("Formulario enviado:", form);
        // Por ahora, solo mostraremos una alerta de éxito.
        Alert.alert("Éxito", "Inicio de sesión exitoso (simulado)");
        // Podrías navegar a otra pantalla aquí, por ejemplo:
        // navigation.navigate('Home');
    };

    const submit = () => {
        // Validación del formulario
        if(!form.userName || !form.gmail || !form.password){
            setError("Campos obligatorios");
            return;
        }
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.gmail)){
            setError("Correo electrónico inválido");
            return;
        }
        if(form.password.length < 10){
            setError("La contraseña debe tener al menos 10 caracteres");
            return;
        }

        sendForm();
    };

    return(
        // Contenedor principal del formulario de inicio de sesión
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            {/* Mostramos el mensaje de error si existe */}
            {error && <Text style={styles.errorText}>{error}</Text>}
            
            {/* Campo de entrada para el nombre de usuario */}
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#888"
                onChangeText={(value) => onChangeText('userName', value)}
                value={form.userName}
            />
            {/* Campo de entrada para el correo electrónico */}
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#888"
                onChangeText={(value) => onChangeText('gmail', value)}
                value={form.gmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {/* Campo de entrada para la contraseña */}
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"
                onChangeText={(value) => onChangeText('password', value)}
                value={form.password}
                secureTextEntry // Oculta el texto de la contraseña
            />
            
            {/* Botón para enviar el formulario */}
            <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <StatusBar style="light" />
        </View>
    );
}

// Estilos para los componentes del formulario
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffcc00',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        color: 'white',
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffcc00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText: {
        color: '#121212',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default Login;
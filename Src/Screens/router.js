import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import Login from './login';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            {/* Es una buena práctica ocultar el encabezado en las pantallas de bienvenida/inicio de sesión */}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;

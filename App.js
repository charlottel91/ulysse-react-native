import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import api from './apollo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginContext, isLoggedIn } from './context/login';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignIn from './components/form/FormSignIn';
import Homepage from './components/Homepage'

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null)

  useEffect(() => {
    setUserToken(null)
    const bootstrapAsync = async () => {
      let token = null
      try {
        token = await AsyncStorage.getItem('userToken');
        if (token.length > 0) {
          setUserToken(token)
        }
      } catch (e) {
        alert('Ton identifiant ou ton mot de passe sont mauvais.')
      }
    };
    bootstrapAsync();
  }, []);

  return (
    <ApolloProvider client={api}>
      <LoginContext.Provider value={isLoggedIn}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            {userToken ? <Stack.Screen name="SignIn" component={SignIn} />
              : <Stack.Screen name="Home" component={Homepage} />}
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContext.Provider>
    </ApolloProvider >
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2D4C64',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

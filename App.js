import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import api from './apollo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginContext } from './context/login';
import { StatusBar } from 'react-native';
import SignIn from './components/form/FormSignIn';
import Homepage from './components/Homepage'
import AsyncStorage from '@react-native-community/async-storage'


const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState()
  const isLoggedIn = useContext(LoginContext);
  console.log(isLoggedIn, 'isloggedIn');

  useEffect(() => {
    async function handleSubmit() {
      await setToken(AsyncStorage.getItem('token'))
    }
    handleSubmit()
  }, [])

  return (
    <ApolloProvider client={api}>
      <LoginContext.Provider value={isLoggedIn}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {token && token ?
              <Stack.Screen name="Root" component={Root} /> : <Stack.Screen name="SignIn" component={SignIn} />}
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContext.Provider>
    </ApolloProvider >
  );
};

function Root() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Homepage} />
    </Stack.Navigator>
  )
};

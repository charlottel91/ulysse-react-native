import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import api from './apollo';
import { LoginContext, isLoggedIn } from './context/login';

// import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import FormSignIn from './components/form/FormSignIn'

export default function App() {
  const [userToken, setUserToken] = useState()
  return (
    <ApolloProvider client={api}>
      <LoginContext.Provider value={isLoggedIn}>
        <View style={styles.container}>
          <StatusBar />
          <FormSignIn />
        </View>
      </LoginContext.Provider>
    </ApolloProvider>
    // <NavigationContainer>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={Homepage} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D4C64',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

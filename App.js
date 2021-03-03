import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import api from './apollo';

// import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import FormSignIn from './components/form/FormSignIn'

export default function App() {
  return (
    <ApolloProvider client={api}>
      <View style={styles.container}>
        <StatusBar />
        <FormSignIn />
      </View>
    </ApolloProvider>
    // <NavigationContainer>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="sign-in" component={SignIn} />
    //       <Stack.Screen name="sign-up" component={SignUp} />
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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import SignIn from './pages/connection/SignIn'
import SignUp from './pages/connection/SignUp'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="sign-in" component={SignIn} />
          <Stack.Screen name="sign-up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationContainer>
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

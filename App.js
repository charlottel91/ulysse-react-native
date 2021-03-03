import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import FormSignIn from './components/form/FormSignIn'

export default function App() {
  return (
    <View style={styles.container}>
      <FormSignIn />
    </View>
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

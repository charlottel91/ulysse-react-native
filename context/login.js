import { createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const isLoggedIn = !!AsyncStorage.getItem('token');

export const LoginContext = createContext({});

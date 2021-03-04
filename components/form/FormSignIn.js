import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLazyQuery } from '@apollo/client';

import { LOGIN } from '../../apollo/queries/login';

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, { data }] = useLazyQuery(LOGIN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({
                variables: {
                    email: email,
                    password: password,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        if (data?.login?.token) {
            AsyncStorage.setItem('token', data.login.token);
        }
    }, [data]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connecte toi</Text>
            <TextInput style={styles.input} value={email} onChangeText={e => setEmail(e)} placeholder='email' autoCompleteType='email' name='email' />
            <TextInput style={styles.input} value={password} onChangeText={e => setPassword(e)} placeholder='mot de passe' autoCompleteType='password' name='password' />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.textButton}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2D4C64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fefefe',
        fontSize: 30,
        marginBottom: 30
    },
    input: {
        backgroundColor: 'white',
        margin: 15,
        paddingLeft: 10,
        width: '80%',
        height: 50
    },
    button: {
        backgroundColor: '#E1755E',
        width: '40%',
        height: 40,
        marginTop: 20
    },
    textButton: {
        color: '#fefefe',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 7
    }
});

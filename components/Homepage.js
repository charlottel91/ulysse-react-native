import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function Homepage({ navigation }) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        AsyncStorage.clear()
        navigation.navigate('SignIn')
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: "#fefefe" }}>Bienvenue sur Ulysse</Text>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.textButton}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D4C64',
        alignItems: 'center',
        justifyContent: 'center',
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
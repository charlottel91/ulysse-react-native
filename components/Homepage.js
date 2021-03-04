import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Homepage() {
    return (
        <View style={styles.container}>Bienvenue sur Ulysse</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D4C64',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
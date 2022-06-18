import React, { useState } from 'react';

import { View, Text, StyleSheet, Animated } from 'react-native';


export default function Sobre() {
    const [largura] = useState(new Animated.Value(0));
    const [altura] = useState(new Animated.Value(50));

    Animated.sequence([
        Animated.timing(
            largura,
            {
                toValue: 420,
                duration: 2000,
                useNativeDriver: false, // serve para não aparecer as mensagem de alertas no emulador
            }
        ),
        Animated.timing(
            altura,
            {
                toValue: 200,
                duration: 2000,
                useNativeDriver: false
            }
        )
    ]).start();

    return (
        <View style={styles.container} >
            <Text style={styles.texto}>Tela sobre</Text>

            <Animated.View style={{
                width: largura,
                height: altura,
                backgroundColor: '#da487a',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={styles.textoAnime}>Carregando</Text>
            </Animated.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e91e63',
    },
    texto: {
        marginBottom: -350,
        fontSize: 25,
        color: '#ccbac0',
    },
    textoAnime: {
        color: '#ccbac0',
        fontSize: 35
    },
})

import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';




export default function Detalhes() {

    const [largura] = useState(new Animated.Value(250));
    const [altura] = useState(new Animated.Value(50));

    Animated.loop(
        Animated.sequence([
            Animated.timing(
                largura, {
                toValue: 400,
                duration: 2000,
                useNativeDriver: false
            }
            ),
            Animated.timing(
                largura, {
                toValue: 250,
                duration: 2000,
                useNativeDriver: false
            }
            )
        ])
    ).start()


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Pagina Detalhes
            </Text>

            <Animated.View style={{
                width: largura,
                height: altura,
                backgroundColor: '#c5e1a4',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
            }}>

                <Text style={styles.textoAnime}>Carregando ...</Text>
            </Animated.View>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6033aa'
    },

    texto: {
        marginBottom: 350,
        fontSize: 25,
        color: '#9475cc',
    },
    textoAnime: {
        color: '#5a4f6d',
        fontSize: 18
    },
})
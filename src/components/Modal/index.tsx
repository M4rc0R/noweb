import { useState } from 'react';
import { Text, TouchableOpacity, View, Modal, StyleSheet, FlatList } from 'react-native';



export function ModalItens({handClose}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.Mensagem}>Olá, Infelizmente a vizualização não está sendo possível no momento,
                    tente novamente mais tarde!
                </Text>
                <TouchableOpacity style={styles.botao} onPress={handClose}>
                    <Text style={styles.Textbotao}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: "#fff",
        width: "85%",
        height: '70%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    botao: {
        backgroundColor: "#1BD15D",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 8,
    },
    Textbotao: {
        color: "#fff",
        fontSize: 20,
        fontWeight: '700',
    },
    Mensagem:{
        margin:20,
        padding:10,
        fontSize:17,
    }
})
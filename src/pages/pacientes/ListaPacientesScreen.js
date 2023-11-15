// Importando as dependências do React Native
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

// Criando o componente da tela de autenticação
const ListaPacientesScreen = ({ navigation }) => {
    const data = [
        { id: "1", emoji: "👩‍💼", name: "Maria", age: 25 },
        { id: "2", emoji: "👨‍💻", name: "João", age: 30 },
        { id: "3", emoji: "👴🏾", name: "José", age: 65 },
        // Adicione mais pessoas conforme necessário
    ];

    const handleItemPress = (item) => {
        // Adicione a lógica que você deseja quando um item é clicado
        console.log(`Item clicado: ${item.name}`);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleItemPress(item)}
            style={styles.item}
        >
            <View style={styles.avatarContainer}>
                <Text style={styles.emoji}>{item.emoji}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.age}>{`${item.age} anos`}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
            <TouchableOpacity
                style={styles.fab}
                onPress={() => console.log("FAB Pressed")}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaPacientesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 8,
    },
    item: {
        flex: 1,
        margin: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        padding: 16,
        elevation: 2,
    },
    emoji: {
        fontSize: 50,
        marginBottom: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
    },
    age: {
        fontSize: 16,
        color: "#888",
    },
    fab: {
        position: "absolute",
        width: 75,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        right: 16,
        bottom: 24,
        backgroundColor: "#E23932", // Cor do FAB
        borderRadius: 100,
        elevation: 8,
    },
    fabText: {
        fontSize: 32,
        color: "#fff",
    },
});

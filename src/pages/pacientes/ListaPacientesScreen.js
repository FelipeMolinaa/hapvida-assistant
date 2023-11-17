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

import FABButton from "../../components/FAB";

const ListaPacientesScreen = ({ navigation }) => {
    const data = [
        { id: "1", emoji: "👩‍💼", name: "Maria", age: 25 },
        { id: "2", emoji: "👨‍💻", name: "João", age: 30 },
        { id: "3", emoji: "👴🏾", name: "José", age: 65 },
    ];

    const handleItemPress = (item) => {};

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

            <FABButton
                iconName="plus"
                onPress={() => navigation.navigate("cadastroPaciente")}
            />
        </View>
    );
};

export default ListaPacientesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
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
});

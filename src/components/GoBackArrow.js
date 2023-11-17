import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Ou qualquer outra biblioteca de ícones que você esteja usando

const GoBackArrow = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.arrowBtn} onPress={onPress}>
            <FontAwesome5 name={"arrow-left"} size={24} color="black" />
            <Text style={styles.text}> Voltar </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    arrowBtn: {
        marginHorizontal: 8,
        marginVertical: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        marginStart: 8,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default GoBackArrow;

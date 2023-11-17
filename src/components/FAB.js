import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Ou qualquer outra biblioteca de ícones que você esteja usando

const FABButton = ({ onPress, iconName }) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <FontAwesome5 name={iconName} size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default FABButton;

// Importando as dependências do React Native
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

const ConfirmarCodigoScreen = ({ navigation }) => {
    const [confirmCode, setConfirmCode] = useState("");

    const ConfirmCodeClickHandle = () => {
        if (confirmCode.length == 6) {
            navigation.navigate("listaPacientes");
        } else {
            Alert.alert(
                "Erro",
                "Codigo digitado é invalido, por favor, tente novamente"
            );
        }
    };

    return (
        <View style={GlobalStyles.containerCenter}>
            <Text>Aguarde o envio do SMS e digite o Código abaixo</Text>
            <TextInput
                placeholder="Codigo de confirmação"
                style={GlobalStyles.input}
                value={confirmCode}
                keyboardType="numeric"
                onChangeText={setConfirmCode}
            />
            <Button
                title="Confirmar"
                onPress={ConfirmCodeClickHandle}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        borderRadius: 8,
    },
});

export default ConfirmarCodigoScreen;

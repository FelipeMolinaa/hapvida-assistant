import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

// Criando o componente da tela de autenticação
const CadastroCelularScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumberChange = (formatted, extracted) => {
        const cleanedPhoneNumber = formatted.replace(/[\s()-]/g, "");
        setPhoneNumber(cleanedPhoneNumber);
    };

    const handleSendSMS = () => {
        if (/^\d{11}$/.test(phoneNumber)) {
            navigation.navigate("ConfirmarCodigo");
        } else {
            Alert.alert(
                "Erro",
                "Por favor, insira um número de telefone válido."
            );
        }
    };

    return (
        <View style={GlobalStyles.containerCenter}>
            <Text> Bem-vindo ao hapvida Assistant</Text>
            <TextInputMask
                style={GlobalStyles.input}
                placeholder="(DDD) 12345-6789"
                type={"cel-phone"}
                options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                }}
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
            />
            <Button
                title="Enviar SMS"
                onPress={handleSendSMS}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
    },
});

export default CadastroCelularScreen;

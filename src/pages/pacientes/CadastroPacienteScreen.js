// Importando as dependências do React Native
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { Picker } from "@react-native-picker/picker";
import GlobalStyles from "../../styles/GlobalStyles";
import FABButton from "../../components/FAB";
import GoBackArrow from "../../components/GoBackArrow";

const CadastroPacienteScreen = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState(
        new Date().toLocaleDateString("pt-BR")
    );
    const [sexo, setSexo] = useState("masculino");
    const [detalhes, setDetalhes] = useState("");

    const cadastrarPaciente = () => {
        if (nome.length != 0) {
            navigation.goBack();
            return;
        }
        Alert.alert(
            "Erro",
            "Erro ao cadastrar, revise os campos e tente novamente"
        );
    };

    const OnChangeDataInput = (text) => {
        console.log(text);
    };

    return (
        <View style={styles.container}>
            <GoBackArrow onPress={() => navigation.goBack()} />
            <View>
                <Text style={GlobalStyles.label}>Nome:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
                <Text style={GlobalStyles.label}>Data de Nascimento:</Text>
                <TextInputMask
                    style={GlobalStyles.input}
                    placeholder="Data de Nascimento"
                    type={"datetime"}
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                    maxLength={10}
                />

                <Text style={GlobalStyles.label}>Sexo:</Text>
                <Picker
                    style={GlobalStyles.input}
                    selectedValue={sexo}
                    onValueChange={(itemValue) => setSexo(itemValue)}
                >
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Feminino" value="feminino" />
                    <Picker.Item label="Outro" value="outro" />
                </Picker>

                <Text style={GlobalStyles.label}>Mais Detalhes:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={detalhes}
                    onChangeText={(text) => setDetalhes(text)}
                    multiline
                    numberOfLines={4}
                />
            </View>
            <FABButton iconName="check" onPress={cadastrarPaciente} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    },
});

export default CadastroPacienteScreen;

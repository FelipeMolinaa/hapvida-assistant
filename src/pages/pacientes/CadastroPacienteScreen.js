// Importando as dependências do React Native
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import PacientesService from "../../service/PacientesService";

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
    const [emoji, setEmoji] = useState("");

    const cadastrarPaciente = () => {
        if (nome.length != 0 && emoji.length != 0) {
            PacientesService.cadastrar("paciente", {
                nome: nome,
                dataNascimento: dataNascimento,
                sexo: sexo,
                detalhes: detalhes,
                emoji: emoji
            })
            navigation.goBack();
            return;
        }
        Alert.alert(
            "Erro",
            "Erro ao cadastrar, revise os campos e tente novamente"
        );
    };

    return (
        <View style={[GlobalStyles.container]}>
            <GoBackArrow onPress={() => navigation.goBack()} />
            <View>
                <Picker
                    style={GlobalStyles.input}
                    selectedValue={emoji}
                    onValueChange={(itemValue, itemIndex) =>
                        setEmoji(itemValue)
                    }>
                    <Picker.Item label="Selecione um emoji" value="" />
                    <Picker.Item label="👶🏼" value="👶🏼" />
                    <Picker.Item label="👶🏽" value="👶🏽" />
                    <Picker.Item label="👶🏾" value="👶🏾" />
                    <Picker.Item label="👶🏿" value="👶🏿" />
                    <Picker.Item label="👦🏻" value="👦🏻" />
                    <Picker.Item label="👦🏼" value="👦🏼" />
                    <Picker.Item label="👦🏽" value="👦🏽" />
                    <Picker.Item label="👦🏾" value="👦🏾" />
                    <Picker.Item label="👦🏿" value="👦🏿" />
                    <Picker.Item label="👧🏻" value="👧🏻" />
                    <Picker.Item label="👧🏼" value="👧🏼" />
                    <Picker.Item label="👧🏽" value="👧🏽" />
                    <Picker.Item label="👧🏾" value="👧🏾" />
                    <Picker.Item label="👧🏿" value="👧🏿" />
                    <Picker.Item label="👨🏻" value="👨🏻" />
                    <Picker.Item label="👨🏼" value="👨🏼" />
                    <Picker.Item label="👨🏽" value="👨🏽" />
                    <Picker.Item label="👨🏾" value="👨🏾" />
                    <Picker.Item label="👨🏿" value="👨🏿" />
                    <Picker.Item label="👩🏻" value="👩🏻" />
                    <Picker.Item label="👩🏼" value="👩🏼" />
                    <Picker.Item label="👩🏽" value="👩🏽" />
                    <Picker.Item label="👩🏾" value="👩🏾" />
                    <Picker.Item label="👩🏿" value="👩🏿" />
                </Picker>
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

});

export default CadastroPacienteScreen;

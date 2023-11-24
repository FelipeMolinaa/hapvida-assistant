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

const CadastroConsultaScreen = ({ navigation }) => {

    // Variáveis de estado da consulta
    const [especialidade, setEspecialidade] = useState("");
    const [hospital, setHospital] = useState("");
    const [doutor, setDoutor] = useState("")
    const [dataConsulta, setDataConsulta] = useState(new Date().toLocaleDateString("pt-BR"));
    const [lembretes, setLembretes] = useState("")

    const cadastrarPaciente = () => {
        if (hospital.length != 0 &&
            especialidade.length != 0
        ) {
            PacientesService.cadastrar("consulta", {
                especialidade,
                hospital,
                doutor,
                dataConsulta,
                lembretes
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
                    selectedValue={especialidade}
                    onValueChange={(itemValue, itemIndex) =>
                        setEspecialidade(itemValue)
                    }>
                    <Picker.Item label="Selecione uma especialidade" value="" />
                    <Picker.Item label="Cardiologia" value="heart" />
                    <Picker.Item label="Dermatologia" value="smile" />
                    <Picker.Item label="Endocrinologia" value="flask" />
                    <Picker.Item label="Gastroenterologia" value="stomach" />
                    <Picker.Item label="Hematologia" value="tint" />
                    <Picker.Item label="Neurologia" value="brain" />
                    <Picker.Item label="Ginecologia" value="female" />
                    <Picker.Item label="Oftalmologia" value="eye" />
                    <Picker.Item label="Ortopedia" value="bone" />
                    <Picker.Item label="Otorrinolaringologia" value="ear" />
                    <Picker.Item label="Pediatria" value="baby" />
                    <Picker.Item label="Psiquiatria" value="brain" />
                    <Picker.Item label="Radiologia" value="x-ray" />
                    <Picker.Item label="Reumatologia" value="joint" />
                    <Picker.Item label="Urologia" value="genderless" />
                </Picker>

                <Text style={GlobalStyles.label}>Hospital:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={hospital}
                    onChangeText={(text) => setHospital(text)}
                />

                <Text style={GlobalStyles.label}>Doutor:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={doutor}
                    onChangeText={(text) => setDoutor(text)}
                />
                <Text style={GlobalStyles.label}>Data da Consulta:</Text>
                <TextInputMask
                    style={GlobalStyles.input}
                    placeholder="Data de Nascimento"
                    type={"datetime"}
                    value={dataConsulta}
                    onChangeText={setDataConsulta}
                    maxLength={10}
                />

                <Text style={GlobalStyles.label}>Lembretes:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={lembretes}
                    onChangeText={(text) => setLembretes(text)}
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

export default CadastroConsultaScreen;

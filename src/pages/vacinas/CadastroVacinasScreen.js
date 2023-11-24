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

const CadastroVacinasScreen = ({ navigation }) => {

    const [unidade, setUnidade] = useState("");
    const [tipoVacina, setTipoVacina] = useState("")
    const [dataVacinacao, setDataVacinacao] = useState(new Date().toLocaleDateString("pt-BR"));
    const [lembretes, setLembretes] = useState("")

    const cadastrarPaciente = () => {
        if (unidade.length != 0 &&
            tipoVacina.length != 0
        ) {
            PacientesService.cadastrar("vacina", {
                unidade,
                tipoVacina,
                dataVacinacao,
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
                <Text style={GlobalStyles.label}>Tipo da Vacina:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={tipoVacina}
                    onChangeText={(text) => setTipoVacina(text)}
                />
                <Text style={GlobalStyles.label}>Unidade:</Text>
                <TextInput
                    style={GlobalStyles.input}
                    value={unidade}
                    onChangeText={(text) => setUnidade(text)}
                />
                <Text style={GlobalStyles.label}>Data da Consulta:</Text>
                <TextInputMask
                    style={GlobalStyles.input}
                    placeholder="Data de Nascimento"
                    type={"datetime"}
                    value={dataVacinacao}
                    onChangeText={setDataVacinacao}
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

export default CadastroVacinasScreen;

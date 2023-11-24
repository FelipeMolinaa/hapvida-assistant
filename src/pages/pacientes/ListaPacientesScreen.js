// Importando as dependências do React Native
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

import PacientesService from "../../service/PacientesService";
import { useIsFocused } from '@react-navigation/native';

import FABButton from "../../components/FAB";

const ListaPacientesScreen = ({ navigation }) => {

    const [data, setData] = useState([]);
    const isFocused = useIsFocused();

    getAllPacientes = async () => {
        var response = await PacientesService.getAll("paciente")
        setData(response)
    }

    useEffect(() => {
        getAllPacientes();
    }, [isFocused]);

    const handleItemPress = (item) => {
        console.log(item)
        navigation.navigate("PacienteHome", item.key);
    };

    const calcularDiferencaDeTempo = (data) => {
        const partesData = data.split("/");

        const dataFornecida = new Date(partesData[2], partesData[1] - 1, partesData[0]); // Mês é indexado de 0 a 11

        const dataAtual = new Date();
        const diferencaEmMilissegundos = dataAtual - dataFornecida;

        const anos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
        const meses = Math.floor(diferencaEmMilissegundos / (30.44 * 24 * 60 * 60 * 1000));
        const semanas = Math.floor(diferencaEmMilissegundos / (7 * 24 * 60 * 60 * 1000));

        if (anos > 0) {
            return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
        } else if (meses > 0) {
            return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
        } else {
            return `${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleItemPress(item)}
            style={styles.item}
        >
            <View style={styles.avatarContainer}>
                <Text style={styles.emoji}>{item.emoji}</Text>
            </View>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.age}>{`${calcularDiferencaDeTempo(item.dataNascimento)}`}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
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
        textAlign: "center"
    },
    age: {
        fontSize: 16,
        color: "#888",
    },
});

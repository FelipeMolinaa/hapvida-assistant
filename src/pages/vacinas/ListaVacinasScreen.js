// Importando as dependências do React Native
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
} from "react-native";
import GoBackArrow from "../../components/GoBackArrow";
import PacientesService from "../../service/PacientesService";
import FABButton from "../../components/FAB";
import { FontAwesome5 } from "@expo/vector-icons";
import { useIsFocused } from '@react-navigation/native';

const ListaVacinasScreen = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [itemFocused, setItemFocused] = useState(null);
    const isFocused = useIsFocused();

    getAllConsultas = async () => {
        var response = await PacientesService.getAll("vacina")
        setData(response)
    }

    useEffect(() => {
        getAllConsultas();
    }, [isFocused]);

    handleItemPress = (item) => {
        console.log(item)
        if (itemFocused == item.key) {
            setItemFocused(null);
        } else {
            setItemFocused(item.key);
        }
    }

    const calcularDiferencaDeTempo = (data) => {
        const partesData = data.split("/");
        const dataFornecida = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        const dataAtual = new Date();

        const diferencaEmMilissegundos = dataFornecida - dataAtual;

        if (diferencaEmMilissegundos < 0) {
            const diasPassados = Math.floor(Math.abs(diferencaEmMilissegundos) / (24 * 60 * 60 * 1000));
            return `${diasPassados} ${diasPassados === 1 ? 'dia atrás' : 'dias atrás'}`;
        }

        const dias = Math.floor(diferencaEmMilissegundos / (24 * 60 * 60 * 1000));
        const semanas = Math.floor(diferencaEmMilissegundos / (7 * 24 * 60 * 60 * 1000));
        const meses = Math.floor(diferencaEmMilissegundos / (30.44 * 24 * 60 * 60 * 1000));
        const anos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

        if (anos > 0) {
            return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
        } else if (meses > 0) {
            return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
        } else if (semanas > 0) {
            return `${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
        } else {
            return `${dias} ${dias === 1 ? 'dia' : 'dias'}`;
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleItemPress(item)}
            style={styles.item}
        >
            <View>
                <FontAwesome5 name="syringe" style={styles.icon} />
            </View>
            <Text style={styles.name}>{item.tipoVacina}</Text>
            <Text style={styles.doutor}>{item.unidade}</Text>
            <Text>{calcularDiferencaDeTempo(item.dataVacinacao)}</Text>
            {item.key == itemFocused ?
                (
                    <View>
                        <Text>{item.lembretes}</Text>
                    </View>
                )
                : null}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <GoBackArrow onPress={() => navigation.goBack()} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                numColumns={2}
            />
            <FABButton
                iconName="plus"
                onPress={() => navigation.navigate("cadastroVacina")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
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
    icon: {
        fontSize: 50,
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    doutor: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
        textAlign: "center"
    },
});

export default ListaVacinasScreen;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';


import ListaPacientesScreen from "./pages/pacientes/ListaPacientesScreen";
import CadastroPacienteScreen from "./pages/pacientes/CadastroPacienteScreen";
import ListaConsultasScreen from "./pages/consultas/ListaConsultasScreen";
import CadastroConsultaScreen from "./pages/consultas/CadastroConsultaScreen";
import CadastroVacinasScreen from "./pages/vacinas/CadastroVacinasScreen";
import ListaVacinasScreen from "./pages/vacinas/ListaVacinasScreen";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

export default function Rotes() {
    const TabNavigator = () => {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="listaConsultas"
                    component={ListaConsultasScreen}
                    options={{
                        title: "Consultas",
                        tabBarIcon: ({ color, size }) => (
                            <Fontisto name="doctor" size={24} color="black" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="listaVacinas"
                    component={ListaVacinasScreen}
                    options={{
                        title: "Vacinas",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="syringe" size={24} color="black" />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    };

    const StackNavigator = () => {
        return (
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen
                    name="listaPacientes"
                    component={ListaPacientesScreen}
                />
                <stack.Screen
                    name="cadastroPaciente"
                    component={CadastroPacienteScreen}
                />
                <stack.Screen
                    name="cadastroConsulta"
                    component={CadastroConsultaScreen}
                />
                <stack.Screen
                    name="cadastroVacina"
                    component={CadastroVacinasScreen}
                />
                <stack.Screen name="PacienteHome" component={TabNavigator} />
            </stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

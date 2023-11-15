import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroCelularScreen from "./pages/userAuth/CadastroCelularScreen";
import ConfirmarCodigoScreen from "./pages/userAuth/ConfirmarCodigoScreen";
import ListaPacientesScreen from "./pages/pacientes/ListaPacientesScreen";

const stack = createNativeStackNavigator();

export default function Rotes() {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen
                    name="listaPacientes"
                    component={ListaPacientesScreen}
                />
                <stack.Screen
                    name="CadastroCelular"
                    component={CadastroCelularScreen}
                />
                <stack.Screen
                    name="ConfirmarCodigo"
                    component={ConfirmarCodigoScreen}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}

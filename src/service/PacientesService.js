import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

class PacientesService {
    static async cadastrar(folder, paciente) {
        try {

            await AsyncStorage.setItem(folder + "/" + uuidv4(), JSON.stringify(paciente));
            return true;
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            return false;
        }
    }

    static async getAll(folder) {
        try {
            const pacientesKeys = await AsyncStorage.getAllKeys();
            return await Promise.all(
                pacientesKeys
                    .filter((key) => key.includes(folder + "/"))
                    .map(async (key) => {
                        var response = JSON.parse(await AsyncStorage.getItem(`${key}`));
                        response.key = key;
                        return response;
                    })
            );

        } catch (error) {
            console.error("Erro ao obter todos os pacientes:", error);
            return [];
        }
    }

    static async get(folder, nome) {
        try {
            const paciente = await JSON.parse(await AsyncStorage.getItem(folder + "/" + nome));
            return paciente;
        } catch (error) {
            console.error("Erro ao verificar usuário:", error);
            return false;
        }
    }

}

export default PacientesService;

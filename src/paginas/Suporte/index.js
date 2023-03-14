import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import estilos from './estilos'


export default function Suporte() {
    return (
        <ScrollView>
            <View style={estilo.cai}>
                <View style={estilo.caixa}>
                    <Text style={estilo.menu}>Menu</Text>
                    <Text style={estilo.telefone}>Telefone</Text>
                    <Text>Contato</Text>
                    <Text>Suporte</Text>
                </View>
                <View>
                    <TextInput
                        style={estilo.input}
                        placeholder="digite sua mensagem"
                        autoCapitalize="none"

                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={estilo.botao}>
                            Enviar
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
 
    )
}
const estilo = StyleSheet.create({
    cai: {

    },
    caixa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20

    },
    botao: {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        padding: 20,
        fontSize: 18
    },
    input:{
         
    }


})
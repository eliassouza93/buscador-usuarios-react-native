import { useState } from "react"
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import estilos from './estilos'


export default function Suporte() {
    const [nome, setNome] = useState('')

    function Precionar() {
       alert('clicou')
       
    }

    return (
        <ScrollView>
            <View style={estilo.cai}>
                <View style={estilo.caixa}>
                    <Text style={estilo.menu}>Menu</Text>
                    <Text style={estilo.telefone}>Telefone</Text>
                    <Text>Contato</Text>
                    <Text>Suporte</Text>
                </View>
                <View style={estilo.info}>
                    <TextInput
                        style={estilo.input}
                        placeholder="Digite sua mensagem"
                        autoCapitalize="none"
                        onChange={(e) => setNome(e.target.value)}

                    />

                    <View>
                        <TouchableOpacity>
                            <Text onPress={Precionar} style={estilo.botao}>
                                Enviar
                            </Text>
                        </TouchableOpacity>

                    </View>
                   
                  
                </View>


            </View>
        </ScrollView>

    )
}
const estilo = StyleSheet.create({
    cai: {
        width: '100%'
    },
    caixa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,

    },
    botao: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        fontSize: 18,
        marginTop: 15,
        paddingHorizontal: 150,
        borderRadius: 8,


    },
    input: {
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 2,
        padding: 10,
        fontSize: 16,
        width: '90%'


    },
    info: {

        alignItems: 'center',
        justifyContent: 'center',
    }


})
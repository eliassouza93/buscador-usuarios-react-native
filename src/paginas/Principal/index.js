import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import axios from 'axios';

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    const api = axios.create({
        baseURL: 'https://api.github.com/users/' + nomeUsuario

    })
    function Busca(nomeUsuario) {
        api.get()
            .then((resposta) => {
                setUsuario(resposta.data)
            }).catch(erro => {
                console.log(erro)

            })
    }
    return (
        <ScrollView>
            <View style={estilos.container}>
                {
                    usuario?.login &&
                    <>
                        <View style={estilos.fundo} />
                        <View style={estilos.imagemArea}>
                            <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                        </View>
                        <Text style={estilos.textoNome}> {usuario.name} </Text>
                        <Text style={estilos.textoEmail}> {usuario.location} </Text>
                        <View style={estilos.seguidoresArea}>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                            </View>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositorios')}>
                            <Text style={estilos.repositorios}>
                                Ver os repositórios
                            </Text>
                        </TouchableOpacity>
                    </>}

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}

                />

                <TouchableOpacity style={estilos.botao}
                    onPress={Busca}
                >
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, SafeAreaView } from 'react-native';
import Principal from './Principal'
import CriarRepositorio from './CriarRepositorio'
import InfoRepositorio from './InfoRepositorio'
import Repositorios from './Repositorios'
import Suporte from './Suporte'

const Tab = createBottomTabNavigator()

export default function Rotas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Principal' component={Principal} />
                    <Tab.Screen name='CriarRepositorio' component={CriarRepositorio} />
                    <Tab.Screen name='InfoRepositorio' component={InfoRepositorio} />
                    <Tab.Screen name='Repositorios' component={Repositorios} />
                    <Tab.Screen name='Suporte' component={Suporte} />
                    
                </Tab.Navigator>

            </NavigationContainer>


        </SafeAreaView>

    );
}
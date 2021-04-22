import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    FlatList
} from 'react-native'

import { EnviromentButton } from '../components/EnviromentButton'
import { Header } from '../components/Header'

import api from '../services/api'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnviromentProps {
    key: string;
    title: string;
}

export function PlantSelect() {
 const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);

    useEffect(()=>{
        async function fetchEnviroment() {
            const {data} = await api.get('plants_environments')
            setEnviroments([
                {
                    key: "all",
                    title: "Todos",
                },
                ...data
            ])
        }

        fetchEnviroment();
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.content}>
                <Header />
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>
            </View>
            <View>
                <FlatList 
                    data={enviroments}
                    renderItem={({item})=>(
                        <EnviromentButton 
                            title={item.title} 
                            
                        />
                    )}               
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        lineHeight: 20,
        color: colors.heading,
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    }
})
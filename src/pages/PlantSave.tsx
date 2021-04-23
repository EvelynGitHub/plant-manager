import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native'
import {SvgFromUri} from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'

export function PlantSave() {
    return(
        <View style={styles.container}>
        <View style={styles.plantInfo}>
            <SvgFromUri 
                uri=""
                height={150}
                width={150}
                />

            <Text style={styles.plantName}>
                Nome da Planta
            </Text>
            <Text style={styles.plantAbout}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laborum accusantium ipsum, laboriosam qui dolor cumque aliquid. Eaque accusamus, sed suscipit quisquam molestias voluptas modi. Voluptatem asperiores cupiditate aspernatur nihil.
            </Text>
        </View>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image 
                    source={waterdrop}
                    style={styles.tipImage}
                />
                <Text style={styles.tipText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad aspernatur officiis praesentium totam.
                </Text>
            </View>

            <Text style={styles.alertLabel}>
                Escolha o melhor horário para ser lembrado.
            </Text>

            <Button 
                title="Cadastrar planta"
                onPress={()=>{}}
            />

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        borderStartColor: colors.shape,
    },
    plantInfo:{},
    plantName:{},
    plantAbout:{},
    controller:{},
    tipContainer:{},
    tipImage: {},
    tipText:{},
    alertLabel:{},
})

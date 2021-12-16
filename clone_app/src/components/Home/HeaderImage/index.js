import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import TinyBalls from "../TinyBalls";

import { styles } from './styles';

export default function HeaderImage() {

    const tinyBalls = [1, 2, 3, 4, 5, 6]

    return (
        <>
            
            <View style={styles.container}>

                <Image source={{
                    uri: 'https://img.lojasrenner.com.br/banner/01-home/20211102_HOME_CARROSEL_MODA_FRESHNESS_GERAL_mob.jpg'
                }}  style={styles.image} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>comprar</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.balls}>
                {tinyBalls.map((item, index) =>
                    <TinyBalls key={index} index={index}>{ item }</TinyBalls>
                )}
            </View>   
        
        </>
        
    )
}
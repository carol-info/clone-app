import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import TinyBalls from "../TinyBalls";

import { Feather } from '@expo/vector-icons';
import { styles } from './styles'

export default function RoundedCard() {

    const tinyBalls = [1, 2, 3]
    
    return (

        <>

            <TouchableOpacity style={styles.mainContainer}>

                <View style={styles.imageContainer}>

                    <Feather name="chevron-left" size={24} color="black" style={styles.icons} />

                    <Image source={{
                        uri: 'https://img.lojasrenner.com.br/banner/01-home/20211209_HOME_CARD_TENDENCIAS_GLAM_FEM_RESP.jpg'
                    }}
                        style={styles.image}
                    />

                    <Feather name="chevron-right" size={24} color="black" style={styles.icons} />

                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        LOOK PARA CELEBRAR
                    </Text>

                    <Text style={styles.textStyle}>
                        {`Paêtes, all white, vermelhos, cetim e mais`}
                    </Text>

                </View>

                <View>
                <TouchableOpacity style={styles.button}>

                    <Text style={styles.buttonText}>comprar</Text>
                </TouchableOpacity>
                </View>
                        
            </TouchableOpacity>

            <View style={styles.balls}>
                {tinyBalls.map((item, index) =>
                    <TinyBalls key={index} index={index}>{ item }</TinyBalls>
                )}
            </View>

        </>
    );
}  
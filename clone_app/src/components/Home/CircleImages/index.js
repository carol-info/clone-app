import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from './styles';

export default function CircleImages() {

    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.lojasrenner.com.br/item/595816884/medium/1.jpg'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginTwelve]}>Ofertas</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.lojasrenner.com.br/item/580191535/zoom/1.jpg'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginFive]}>Feminino</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.lojasrenner.com.br/item/582004561/medium/1.jpg'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginFive]}>Masculino</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.lojasrenner.com.br/item/547502514/medium/1.jpg'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize, styles.textMarginTwelve]}>Infantil</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.lojasrenner.com.br/item/535183333/zoom/1.jpg'
                    }} style={styles.circles} />
                    <Text style={[styles.textSize]}>{`Perfumaria e\nCosméticos`}</Text>
                </TouchableOpacity>

            </View>

        </>
    );
}
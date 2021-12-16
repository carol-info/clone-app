import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles'

export default function Footer() {

    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>

                <TouchableOpacity>
                    <Feather name="shopping-bag" size={22} color="black" style={[styles.iconSize, {marginLeft: 18}]} />
                    <Text style={styles.textSize}>Loja virtual</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="circle" size={22} color="#bdbdbd"  style={styles.iconSize} />
                    <Text style={[styles.textSize, styles.textEnableColor]}>Blog</Text>
                </TouchableOpacity>
                
                <TouchableOpacity> 
                    <Feather name="heart" size={22} color="#bdbdbd" style={[styles.iconSize, {marginLeft: 15}]} />
                    <Text style={[styles.textSize, styles.textEnableColor]}>Favoritos</Text>
                </TouchableOpacity>

                <TouchableOpacity> 
                    <Feather name="credit-card" size={22} color="#bdbdbd" style={[styles.iconSize, {marginLeft: 8}]} />
                    <Text style={[styles.textSize, styles.textEnableColor]}>Cartões</Text>
                </TouchableOpacity>

                <TouchableOpacity> 
                    <Feather name="menu" size={22} color="#bdbdbd" style={[styles.iconSize, {marginLeft: 5}]} />
                    <Text style={[styles.textSize, styles.textEnableColor, styles.textMargin]}>Menu</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    );
}
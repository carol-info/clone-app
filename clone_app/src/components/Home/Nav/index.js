import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons';
import { styles } from './styles'

export default function Nav() {

    return(

        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <Feather name="search" size={22} color="black" />
            </View>

            <View  style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')}  style={styles.logoImage}
                />
                <Text style={styles.logoText}>Renner</Text>
            </View>
            <View style={styles.bagContainer}>
                <Feather name="shopping-bag" size={22} color="black" />
            </View>
        </View>
        
    );
    
}
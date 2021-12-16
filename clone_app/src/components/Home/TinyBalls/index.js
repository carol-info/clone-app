import React from "react";
import { View } from "react-native";

import { styles } from './styles'

export default function TinyBalls(props) {

    const { index } = props;

    return <View style={[styles.ball, {backgroundColor: index == 1 ? '#000' : '#e3e3e3'}]}></View>
}
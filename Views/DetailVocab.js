import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../component/Style";
import FlipCard from "react-native-flip"

const DetailVocab = ({ route }) => {
    const detail = route.params.title
    return (
        <View style={styles.container}>
            <View style={styles.detail}>
                <Text>{detail}</Text>
            </View>
            <View style={styles.choosen}>
                <Button title="Back" />
                <Button title="Flip" />
                <Button title="Next" />
            </View>
        </View>

    )

}


export default DetailVocab
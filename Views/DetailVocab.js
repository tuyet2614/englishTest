import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "../component/Style";
import GestureFlipView from "react-native-gesture-flip-card";


const DetailVocab = ({ route }) => {
    const detail = route.params

    const renderFront = () => {
        return (
            <View style={styles.frontStyle}>
                <Text style={{ fontSize: 25, color: '#000000' }}>{detail.title}</Text>
            </View>
        );
    };

    const renderBack = () => {
        return (
            <View style={styles.backStyle}>
                <Text style={{ fontSize: 25, color: '#000000' }}>{detail.mean}</Text>
            </View>
        );
    };
    return (

        <ImageBackground source={require("../component/images/book2.jpeg")} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <GestureFlipView width={300} height={500}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>
                <View style={styles.choosen}>
                    <View style={styles.button}>
                        <TouchableOpacity ><Text style={styles.status}>Back</Text></TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity ><Text style={styles.status}>Next</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>




    )

}


export default DetailVocab
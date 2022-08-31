import React, { useState } from "react";
import { Text, FlatList, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "../component/Style";
import ListWord from "./ListWord";
import Vocabulary from '../Data/Data'

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.folder}>{item.group}</Text>
    </TouchableOpacity>
)

const Dashboard = ({ navigation }) => {


    const renderItem = ({ item }) => {
        return (

            <Item item={item} onPress={() => {

                navigation.navigate('ListWord', { group: item.group })
            }} />


        )
    }
    return (
        <View>

            <FlatList
                data={Vocabulary}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>

    )
}


export default Dashboard
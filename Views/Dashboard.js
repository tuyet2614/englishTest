import React, { useState } from "react";
import { Text, FlatList, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "../component/Style";
import ListWord from "./ListWord";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Data = [
    {
        id: 1,
        title: "Contract",
    },
    {
        id: 2,
        title: "Marketing",
    },
    {
        id: 3,
        title: "Warranties",
    },
    {
        id: 4,
        title: "Business Planting",
    },
    {
        id: 5,
        title: "Conferences",
    }
]

const Item = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.folder}>{item.title}</Text>
    </View>
)
const Dashboard = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Listword')}>
                <Item item={item} />
            </TouchableOpacity>

        )
    }
    return (
        <View>

            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

    )
}


export default Dashboard
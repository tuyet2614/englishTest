import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Modal, TextInput } from "react-native";
import styles from "../component/Style";



const AddFolder = ({ route, navigation }) => {
    const titleGroup = route.params.titleGroup
    return (
        <View>
            <Text>{titleGroup}</Text>
        </View>
    )

}

export default AddFolder
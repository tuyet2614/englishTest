import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import Vocabulary from "../Data/Data";
import styles from "../component/Style";


const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.folder}>{item.title}</Text>
        <Text style={styles.folder}>{item.mean}</Text>
    </TouchableOpacity>
)
const ListWord = ({ route, navigation }) => {
    const vocabList = route.params.group


    const renderItem = ({ item }) => {
        return (

            <Item item={item} onPress={() => {
                navigation.navigate('DetailWord', { title: item.title, mean: item.mean })
            }} />


        )
    }

    return (

        <View>
            {Vocabulary.map(item => item.group === vocabList ? (
                <FlatList
                    data={item.vocab}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            ) : '')}

        </View>
    )
}

export default ListWord
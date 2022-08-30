import React from "react";
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, SectionList } from "react-native";
import styles from "../component/Style";
import Vocabulary from "../Data/Data";

console.log(Vocabulary)
const Item = ({ item }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.folder}>{item}</Text>

    </TouchableOpacity>
)
const Search = () => {

    const renderItem = ({ item }) => {
        return (
            <Item item={item} />
        )
    }

    return (
        <View >
            <View style={styles.Search}>
                <TextInput
                    style={{ flex: 1, padding: 5 }}
                    placeholder="Search..."
                />
                <Image
                    source={require('../component/images/search.png')}
                    style={styles.icon} />
            </View>

            <View>
                <SectionList
                    sections={Vocabulary}
                    keyExtractor={(item, index) => index}
                    renderItem={renderItem}
                    renderSectionHeader={({ section: { group } }) => (
                        <Text>{group}</Text>
                    )}

                />

            </View>

        </View>
    )
}

export default Search
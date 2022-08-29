import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../component/Style";

const Search = () => {
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

        </View>
    )
}

export default Search
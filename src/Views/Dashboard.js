import React, { useState } from 'react';
import {
    Text,
    FlatList,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import styles from '../component/Style';
import ListWord from './ListWord';
import Vocabulary from '../Data/Data';

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.group}>{item}</Text>
    </TouchableOpacity>
);

const Dashboard = ({ navigation }) => {
    //   const [listGroup, setListGroup] = useState([]);
    let listGroup = [];
    Vocabulary.map(item =>
        listGroup.includes(item.group) ? '' : listGroup.push(item.group),
    );
    console.log('group:', listGroup);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    navigation.navigate('ListWord', { group: item });
                }}
            />
        );
    };
    return (
        <View>
            <FlatList
                data={listGroup}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default Dashboard;
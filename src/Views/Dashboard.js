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

const Item = ({ index, item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.index_group}>

            <Text style={{ fontSize: 15, color: '#fff', }} >{index}</Text>
        </View>

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

    const renderItem = ({ index, item }) => {
        return (
            <Item
                index={index + 1}
                item={item}
                onPress={() => {
                    navigation.navigate('ListWord', { group: item });
                }}
            />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={listGroup}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default Dashboard;
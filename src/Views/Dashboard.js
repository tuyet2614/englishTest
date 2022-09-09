import React, { useEffect, useState } from 'react';
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
import DataDb from '../service/DataDb';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');
// let sound = [];

// const getSound = item => {
//     sound.push(
//         new Sound(item, error => {
//             if (error) {
//                 console.log('failed to load the sound', error);
//                 return;
//             }

//             //   when loaded successfully
//         }),
//     );
// };

const Item = ({ index, item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.index_group}>

            <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10, fontWeight: 'bold' }} >{index}</Text>
        </View>

        <Text style={styles.group}>{item}</Text>
    </TouchableOpacity>
);

const Dashboard = ({ route, navigation }) => {
    //   const [listGroup, setListGroup] = useState([]);

    // useEffect(() => {
    //     Vocabulary.map(item => getSound(item.url));

    //     sound.map((item, index) => sound[index].setVolume(1));
    // }, []);
    const sound = route.params.sound
    let listGroup = [];
    Vocabulary.map(item =>
        listGroup.includes(item.group) ? '' : listGroup.push(item.group),
    );


    const renderItem = ({ index, item }) => {
        return (
            <Item
                index={index + 1}
                item={item}
                onPress={() => {
                    navigation.navigate('ListWord', { group: item, sound: sound });
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
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
// import Vocabulary from '../Data/Data';
import DataDb from '../service/DataDb';
import { openDatabase } from 'react-native-sqlite-storage';


const db = openDatabase({
    name: 'run.db',
    createFromLocation: '~vocabulary.db',
}, null, null);

const Item = ({ index, item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.index_group}>

            <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10, fontWeight: 'bold' }} >{index}</Text>
        </View>

        <Text style={styles.group}>{item}</Text>
    </TouchableOpacity>
);

const Dashboard = ({ route, navigation }) => {

    const [listVocabulary, setListVocabulary] = useState([])
    let listGroup = []
    listVocabulary.map(item =>
        listGroup.includes(item.group) ? '' : listGroup.push(item.group),
    );

    const getCategories = () => {
        db.transaction(txn => {
            txn.executeSql(
                'SELECT * FROM vocabulary',

                [],
                (sqlTxn, res) => {
                    console.log('categories retrieved successfully');
                    let len = res.rows.length;

                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i);

                            results.push({
                                id: item.id,
                                group: item.group,
                                title: item.title,
                                phonetic: item.phonetic,
                                eMean: item.eMean,
                                mean: item.mean,
                                img: item.img,
                                exam: item.exam,
                                trans: item.trans
                            });
                        }

                        setListVocabulary(results);
                    }
                    // else (
                    //     setCategories([])
                    // )
                },
                error => {
                    console.log('error on getting categories ' + error.message);
                },
            );
        });
    };

    useEffect(() => {
        let listGroup = [];
        getCategories()

        listVocabulary.map(item =>
            listGroup.includes(item.group) ? '' : listGroup.push(item.group),
        );

    }, [])

    const renderItem = ({ index, item }) => {
        return (
            <Item
                index={index + 1}
                item={item}
                onPress={() => {
                    navigation.navigate('ListWord', { group: item, Vocabulary: listVocabulary });
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
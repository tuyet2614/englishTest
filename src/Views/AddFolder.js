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
import vocabService from '../service/VocabService';
import { openDatabase } from 'react-native-sqlite-storage';


const db = openDatabase({
    name: 'run.db',
    createFromLocation: '~vocabulary.db',
}, null, null);

const Item = ({ index, item, onPress, score }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.index_group}>

            <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10, fontWeight: 'bold' }} >{index}</Text>
        </View>

        <Text style={styles.group}>{item.title}</Text>
        <View>{score}</View>
    </TouchableOpacity>
);

const Dashboard = ({ route, navigation }) => {
    const [listFolder, setListFolder] = useState([])
    const [listVocabulary, setListVocabulary] = useState([])
    let listGroup = []

    listVocabulary.map(item =>
        listGroup.includes(item.group) ? '' : listGroup.push(item.group),
    );

    const renderFolder = () => {
        let exam = []
        vocabService.getAll().then(res => {
            res.data.map(item => item.handle ? '' : exam.push(item))
            // console.log(res.data)
            setListFolder(exam)
            console.log(exam)

        }).catch(error => console.log(error));
    }

    const onSubmitFormHandler = (titleFolder) => {
        let data = {
            "title": titleFolder,
            "handle": false,
            "score": 0
        }

        vocabService.create(data).
            then(res => {
                setListFolder((pre) => [res.data, ...pre])
                console.log("success fully")
            }).catch(error => console.log(error));


    };

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

    const renderProgressBar = () => {
        return (
            <View style={{
                borderRadius: 100,
                width: 40,
                height: 40
            }}>


                <View
                    style={{
                        width: '80%',
                        height: 10,
                        borderRadius: 20,
                        backgroundColor: '#ffffff',
                        alignSelf: 'center'
                    }}>

                    <Animated.View
                        style={[
                            {
                                height: 10,
                                borderRadius: 20,
                                backgroundColor: COLORS.accent,
                            },
                            {
                                width: progressAnim,
                            },
                        ]}></Animated.View>
                </View>

            </View>

        );
    };

    useEffect(() => {
        let listGroup = [];
        getCategories()


        // listVocabulary.map(item =>
        //     listGroup.includes(item.group) ? '' : listGroup.push(item.group),
        // );
        // let exam = []
        // listFolder.map(item => exam.push(item.title))

        // listGroup.map(item => exam.includes(item) ? '' : onSubmitFormHandler(item))
        // // listFolder.map(item => listGroup.includes(item.title) ? '': onSubmitFormHandler())
        // renderFolder()
        renderFolder()

    }, [])

    const renderItem = ({ index, item }) => {
        return (
            <Item
                index={index + 1}
                item={item}
                onPress={() => {
                    navigation.navigate('ListWord', { group: item.title, Vocabulary: listVocabulary });

                }}
                score={renderProgressBar}
            />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={listFolder}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default Dashboard;
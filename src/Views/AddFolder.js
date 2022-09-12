import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    FlatList,
    cate,
} from 'react-native';
import { set } from 'react-native-reanimated';
// import { openDatabase } from 'react-native-sqlite-storage';

// const db = openDatabase({
//     name: 'run.db',
//     location: 'Library',
//     createFromLocation: '~vocabulary.db',
// });

// console.log(db);

const AddFolder = ({ route }) => {
    const [category, setCategory] = useState([]);
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [categories, setCategories] = useState([]);
    const listVocab = route.params.listVocab
    const Vocabulary = route.params.Vocabulary
    let [listAnswer, setListAnswer] = useState([])


    console.log(listVocab.length)
    const randomItem = () => {
        let answers = []
        if (listVocab.length === 0) {
            setQuestion('end')
            setCorrectAnswer('end')
        }
        else {
            const rdItem = listVocab[Math.floor(Math.random() * listVocab.length)]
            setQuestion(rdItem.title)
            setCorrectAnswer(rdItem.mean)



            listVocab.splice((listVocab.indexOf(rdItem)), 1)
            console.log(listVocab.indexOf(rdItem))
            for (i = 0; i < 3; i++) {
                const item = Vocabulary[Math.floor(Math.random() * Vocabulary.length)]
                answers.push(item.mean)
                Vocabulary.splice((Vocabulary.indexOf(item)), 1)
            }
            answers.push(rdItem.mean)
        }
        setListAnswer(answers)
        console.log(listAnswer)

    }

    // const getCategories = () => {
    //     db.transaction(txn => {
    //         txn.executeSql(
    //             'SELECT * FROM vocabulary',

    //             [],
    //             (sqlTxn, res) => {
    //                 console.log('categories retrieved successfully');
    //                 let len = res.rows.length;

    //                 if (len > 0) {
    //                     let results = [];
    //                     for (let i = 0; i < len; i++) {
    //                         let item = res.rows.item(i);

    //                         results.push({
    //                             id: item.id,
    //                             title: item.title,
    //                             mean: item.mean,
    //                         });
    //                     }

    //                     setCategories(results);
    //                 }
    //                 // else (
    //                 //     setCategories([])
    //                 // )
    //             },
    //             error => {
    //                 console.log('error on getting categories ' + error.message);
    //             },
    //         );
    //     });
    // };

    // const renderCategory = ({ item }) => {
    //     return (
    //         <View
    //             style={{
    //                 flexDirection: 'row',
    //                 paddingVertical: 12,
    //                 paddingHorizontal: 10,
    //                 borderBottomWidth: 1,
    //                 borderColor: '#ddd',
    //             }}>
    //             <Text style={{ marginRight: 9 }}>{item.id}</Text>
    //             <Text>{item.title} </Text>
    //             <Text>{item.mean} </Text>
    //         </View>
    //     );
    // };

    // // useEffect(() => {
    // //   getCategories();
    // // }, []);

    return (
        <View>
            <StatusBar backgroundColor="#222" />

            {/* <TextInput
                placeholder="Enter question"
                value={question}
                onChangeText={(text) => setQuestion(text)}
                style={{ marginHorizontal: 8 }}
            /> */}

            <Button title="Submit" onPress={() => randomItem()} />
            {console.log(listAnswer)}
            <View>
                <Text>{question}</Text>
                {listAnswer.map(item => (
                    <Text>{item}</Text>
                ))}

            </View>
        </View>
    );
};

export default AddFolder;
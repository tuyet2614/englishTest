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
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({
    name: 'quizzz_data',
});

const AddFolder = () => {
    const [category, setCategory] = useState([]);
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [categories, setCategories] = useState([]);

    const createTables = () => {
        db.transaction(txn => {
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ListQuizz (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, optionA TEXT, optionB TEXT, optionC TEXT, optionD TEXT, answer TEXT )`,
                [],
                (sqlTxn, res) => {
                    console.log('table created successfully');
                },
                error => {
                    console.log('error on creating table ' + error.message);
                },
            );
        });
    };

    const addQuizz = () => {
        db.transaction(txn => {

            txn.executeSql(
                `INSERT INTO ListQuizz (question, optionA, optionB, optionC, optionD) 
                VALUES 
                ('check','chao','cam on','kiem tra','xin loi'),
                ('hello','chao','cam on','kiem tra','xin loi'),
                ('thanks','chao','cam on','kiem tra','xin loi')`,


                (sqlTxn, res) => {
                    console.log(`${category} category added successfully`);

                },
                error => {
                    console.log('error on adding category ' + error.message);
                },
            );
        });
    }


    const addCategory = () => {

        if (!question) {
            alert('Enter category');
            return false;
        }

        db.transaction(txn => {

            txn.executeSql(
                `INSERT INTO ListQuizz (question, optionA, optionB, optionC, optionD) VALUES (?,?,?,?,?)`,
                [question, optionA, optionB, optionC, optionD],
                (sqlTxn, res) => {
                    console.log(`${question} category added successfully`);
                    getCategories();
                    setQuestion('')
                    setOptionA('')
                    setOptionB('')
                    setOptionC('')
                    setOptionD('')
                },
                error => {
                    console.log('error on adding category ' + error.message);
                },
            );
        });
    };
    const getCategories = () => {
        db.transaction(txn => {
            txn.executeSql(
                `SELECT * FROM ListQuizz ORDER BY id DESC`,
                [],
                (sqlTxn, res) => {
                    console.log('categories retrieved successfully');
                    let len = res.rows.length;

                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i);

                            results.push({ id: item.id, question: item.question, options: [item.optionA, item.optionB, item.optionC, item.optionD], correctAnswer: item.correcAnswer });
                        }

                        setCategories(results);
                    }
                },
                error => {
                    console.log('error on getting categories ' + error.message);
                },
            );
        });
    };

    const renderCategory = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderColor: '#ddd',
                }}>
                <Text style={{ marginRight: 9 }}>{item.id}</Text>
                <Text>{item.question} </Text>
                {item.options.map(item => (
                    <Text>{item} </Text>
                ))}
            </View>
        );
    };

    useEffect(() => {
        createTables();
        addQuizz();
        getCategories();
    }, []);

    return (
        <View>
            <StatusBar backgroundColor="#222" />

            <TextInput
                placeholder="Enter question"
                value={question}
                onChangeText={(text) => setQuestion(text)}
                style={{ marginHorizontal: 8 }}
            />
            <TextInput
                placeholder="Enter answer1"
                value={optionA}
                onChangeText={(text) => setOptionA(text)}
                style={{ marginHorizontal: 8 }}
            />
            <TextInput
                placeholder="Enter answer2"
                value={optionB}
                onChangeText={(text) => setOptionB(text)}
                style={{ marginHorizontal: 8 }}
            />
            <TextInput
                placeholder="Enter answer3"
                value={optionC}
                onChangeText={(text) => setOptionC(text)}
                style={{ marginHorizontal: 8 }}
            />
            <TextInput
                placeholder="Enter answer4"
                value={optionD}
                onChangeText={(text) => setOptionD(text)}
                style={{ marginHorizontal: 8 }}
            />

            <Button title="Submit" onPress={() => addQuizz()} />

            <FlatList
                data={categories}
                renderItem={renderCategory}
                key={cat => cat.id}
            />
        </View>
    );
};

export default AddFolder;
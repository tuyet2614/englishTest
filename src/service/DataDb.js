import React, { useState, useEffect } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
    name: 'Question_Data',
});

const QuizzData = () => {
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);

    const createTables = () => {
        db.transaction(txn => {
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, Question Text, optionA Text, optionB Text, optionC Text, optionD Text, answer CHARACTER(1) )`,
                [],
                (sqlTxn, res) => {
                    console.log('question created successfully');
                },
                error => {
                    console.log('error on creating table ' + error.message);
                },
            );
        });
    }
}

export default QuizzData
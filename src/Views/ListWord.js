import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Vocabulary from '../Data/Data';
import styles from '../component/Style';

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.group}>{item.title}</Text>
        <Text style={styles.group}>{item.mean}</Text>
    </TouchableOpacity>
);
const ListWord = ({ route, navigation }) => {
    const vocabList = route.params.group;
    let listVocab = [];

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    navigation.navigate('DetailWord', {
                        vocabGroup: listVocab,
                        detail: item,
                    });
                }}
            />
        );
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Practive')
                }}>
                    <Image source={require('../component/images/practive.png')} style={styles.icon_practive} />
                </TouchableOpacity>

            </View>
            <View>
                {Vocabulary.map(item =>
                    item.group === vocabList
                        ? (listVocab.push(item),
                            (
                                <FlatList
                                    data={[item]}
                                    renderItem={renderItem}
                                    keyExtractor={(item, index) => index}
                                />
                            ))
                        : '',
                )}
            </View>
        </View>

    );
};

export default ListWord;
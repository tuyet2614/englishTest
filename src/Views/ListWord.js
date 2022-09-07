import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Vocabulary from '../Data/Data';
import styles from '../component/Style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const Item = ({ item, onPress }) => (
    <View style={styles.item}>
        <View style={styles.iconVolume}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faVolumeHigh} style={{ color: '#ffffff' }} size={18} />
            </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={onPress} style={{ alignContent: 'center' }}>
                <Text style={styles.group}>{item.title}</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>{item.phonetic}</Text>
            </TouchableOpacity>
        </View>

    </View>

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
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Practice')
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
                                    keyExtractor={(item) => item.id}
                                />
                            ))
                        : '',
                )}
            </View>
        </View>

    );
};

export default ListWord;
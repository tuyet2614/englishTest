import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    SectionList,
    ScrollView,
} from 'react-native';
import styles from '../component/Style';
import Vocabulary from '../Data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ navigation }) => {
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setFilterData(Vocabulary);
    }, []);
    const searchFilter = text => {
        if (text) {
            const newVocab = Vocabulary.filter(item => {
                const itemVocab = item.title
                    ? item.title.toLowerCase()
                    : ''.toLowerCase();

                const textData = text.toLowerCase();
                return itemVocab.indexOf(textData) > -1;
            });
            setFilterData(newVocab);
            setSearch(text);
        } else {
            setFilterData(Vocabulary);
            setSearch(text);
        }
    };

    return (

        (
            <View>
                <View style={styles.Search}>
                    <TextInput
                        style={{ flex: 1, padding: 5 }}
                        placeholder="Search..."
                        onChangeText={text => searchFilter(text)}
                        value={search}
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon_search} size={25} />
                </View>

                <View>
                    <ScrollView>

                        {filterData.map(item => (
                            <TouchableOpacity
                                style={styles.item}
                                key={item.id}
                                onPress={() => {
                                    navigation.navigate('DetailWord', {
                                        vocabGroup: Vocabulary,
                                        detail: item,
                                    });
                                }}>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.group}>{item.title}</Text>
                                        <Text style={styles.phonetic}>{item.phonetic}</Text>
                                    </View>


                                    <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.mean}</Text>
                                </View>

                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        )
    );
};

export default Search;
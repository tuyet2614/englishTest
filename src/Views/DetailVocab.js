import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from '../component/Style';
// import Vocabulary from '../Data/Data';
import GestureFlipView from 'react-native-gesture-flip-card';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Tts from 'react-native-tts';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import listVocabService from '../service/listVocabService';
import vocabService from '../service/VocabService';

const DetailVocab = ({ route }) => {
    const detail = route.params;
    const [currentWord, setCurrentWord] = useState(detail.detail);
    const [currentIndex, setCurrentIndex] = useState(
        detail.vocabGroup.indexOf(currentWord),
    );
    const [remember, setRemember] = useState(false)
    const [listVocab, setListVocab] = useState([])
    const [creteTable, setCreateTable] = useState(false)


    const onSubmitFormHandler = async () => {
        let data = {
            title: "Remember",
            handle: true,
            score: 0,
        };

        vocabService
            .create(data)
            .then(res => {
                setListFolder(pre => [res.data, ...pre]);
                console.log('success fully');
            })
            .catch(error => console.log(error));
    };

    const showListVocab = () => {
        listVocabService
            .getAll('50')
            .then(res => {
                setListVocab(res.data);
                console.log('success');
            })
            .catch(error => console.log(error));
    };

    const rememberWord = (item) => {
        console.log("remember word")

        let listTitle = []
        if (remember) {
            let data = {
                title: item.title,
                phonetic: item.phonetic,
                eMean: item.eMean,
                mean: item.mean,
                img: item.img,
                exam: item.exam,
                trans: item.trans,
            };
            listVocab.map(vocab => listTitle.push(vocab.title))
            listTitle.includes(item.title) ? console.log('have already') : (
                listVocabService
                    .create('50', data)
                    .then(res => {
                        setListVocab(pre => [res.data, ...pre]);
                        console.log('success fully');
                    })
                    .catch(error => console.log(error))
                // console.log("add")
            )
            console.log(listTitle)
        }


    }
    const getWord = type => {
        if (type === 'next' && currentIndex < detail.vocabGroup.length - 1) {

            setCurrentWord(detail.vocabGroup[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
        } else if (type === 'pre' && currentIndex > 0) {
            setCurrentWord(detail.vocabGroup[currentIndex - 1]);
            setCurrentIndex(currentIndex - 1);

        }
    };

    useEffect(() => {
        showListVocab()
    }, [])

    const renderFront = () => {
        return (
            <View style={styles.frontStyle}>
                <View style={{ position: 'absolute', right: 40, top: 30 }}>
                    <TouchableOpacity onPress={() => {
                        setRemember(!remember)
                        rememberWord(currentWord)
                    }}>
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: remember ? '#f20' : '#9A9796' }}
                            size={30}

                        />
                    </TouchableOpacity>

                </View>
                <Text style={{ fontSize: 30, color: '#000000', fontWeight: 'bold' }}>
                    {currentWord.title}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 20,
                    }}>
                    <Text style={{ fontSize: 18, color: '#000000', fontWeight: 'bold' }}>
                        {currentWord.phonetic}
                    </Text>
                    <TouchableOpacity
                        style={styles.iconVolume}
                        onPress={() => {
                            Tts.speak(currentWord.title)
                        }}>
                        <FontAwesomeIcon
                            icon={faVolumeHigh}
                            style={{ color: '#ffffff' }}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', width: 350 }}>
                    <Text style={{ fontSize: 20, color: '#000000', textAlign: 'center' }}>
                        {' '}
                        {currentWord.eMean}
                    </Text>
                </View>
                <View>
                    <Image
                        source={{ uri: currentWord.img }}
                        style={{ width: 220, height: 220, marginTop: 20 }}
                    />
                </View>
            </View >
        );
    };

    const renderBack = () => {
        return (
            <View style={styles.backStyle}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 30, color: '#000000', fontWeight: 'bold' }}>
                        {currentWord.title}
                    </Text>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 20,
                    }}>
                    <Text style={{ fontSize: 18, color: '#000000', fontWeight: 'bold' }}>
                        {currentWord.phonetic}
                    </Text>
                    <TouchableOpacity
                        style={styles.iconVolume}
                        onPress={() => {
                            Tts.speak(currentWord.title)
                        }}>
                        <FontAwesomeIcon
                            icon={faVolumeHigh}
                            style={{ color: '#ffffff' }}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 25, color: '#000000', paddingHorizontal: 10 }}>
                        {currentWord.mean}
                    </Text>
                </View>

                <View style={{ marginTop: 40, width: 330 }}>

                    <View style={{ paddingHorizontal: 15 }} >

                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            {currentWord.exam && (
                                <TouchableOpacity
                                    style={{ alignSelf: 'center', marginRight: 5 }}
                                    onPress={() => {
                                        Tts.speak(currentWord.exam), { rate: 0.5 };
                                    }}>
                                    <FontAwesomeIcon
                                        icon={faVolumeHigh}
                                        style={{ color: '#0357C2' }}
                                        size={20}
                                    />
                                </TouchableOpacity>
                            )}

                            <Text
                                style={{ fontSize: 18, color: '#7400BB', fontWeight: 'bold', marginLeft: 5 }}>
                                {currentWord.exam}
                            </Text>

                        </View>

                        <Text
                            style={{ fontSize: 18, color: '#F0843E', fontWeight: 'bold', marginLeft: 25 }}>
                            {currentWord.trans}
                        </Text>
                    </View>

                </View>
            </View>
        );
    };
    return (
        <ImageBackground
            source={require('../component/images/book2.jpeg')}
            resizeMode="cover"
            style={styles.image}>
            <View
                style={{
                    flex: 1,
                    // justifyContent: "center",
                    alignItems: 'center',
                    paddingTop: 35,
                    textAlign: 'center',
                }}>
                <GestureFlipView width={300} height={500}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>

                <View style={styles.choosen}>
                    {currentIndex === 0 ? (
                        ''
                    ) : (
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => getWord('pre')}>
                                <Text style={styles.status}>Back</Text>
                                <Image
                                    source={require('../component/images/back1.png')}
                                    style={styles.icon_choose}
                                />
                            </TouchableOpacity>
                        </View>
                    )}

                    {currentIndex === detail.vocabGroup.length - 1 ? (
                        ''
                    ) : (
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => getWord('next')}>
                                <Text style={styles.status}>Next</Text>
                                <Image
                                    source={require('../component/images/next.png')}
                                    style={styles.icon_choose}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </ImageBackground>
    );
};

export default DetailVocab;
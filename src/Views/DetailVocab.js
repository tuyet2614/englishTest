import React, { useState } from 'react';
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


const DetailVocab = ({ route }) => {
    const detail = route.params;
    const [currentWord, setCurrentWord] = useState(detail.detail);
    const [currentIndex, setCurrentIndex] = useState(
        detail.vocabGroup.indexOf(currentWord),
    );

    const getWord = type => {
        if (type === 'next' && currentIndex < detail.vocabGroup.length - 1) {

            setCurrentWord(detail.vocabGroup[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
        } else if (type === 'pre' && currentIndex > 0) {
            setCurrentWord(detail.vocabGroup[currentIndex - 1]);
            setCurrentIndex(currentIndex - 1);

        }
    };

    const renderFront = () => {
        return (
            <View style={styles.frontStyle}>
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
            </View>
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
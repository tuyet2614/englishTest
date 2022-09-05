import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../component/Style';
import Vocabulary from '../Data/Data';
import GestureFlipView from 'react-native-gesture-flip-card';

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
                <Text style={{ fontSize: 25, color: '#000000' }}>
                    {currentWord.title}
                </Text>
            </View>
        );
    };

    const renderBack = () => {
        return (
            <View style={styles.backStyle}>
                <Text style={{ fontSize: 25, color: '#000000' }}>{currentWord.mean}</Text>
            </View>
        );
    };
    return (
        <ImageBackground
            source={require('../component/images/book2.jpeg')}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.container}>
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
                                <Image source={require('../component/images/back1.png')}
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
                                <Image source={require('../component/images/next.png')}
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
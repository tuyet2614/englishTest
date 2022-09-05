import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Modal, TextInput } from "react-native";
import styles from "../component/Style";

const Item = ({ item, onPress }) => (

    <TouchableOpacity onPress={onPress} style={styles.folder}>
        <Text>{item}</Text>
        <TouchableOpacity style={{
            position: 'absolute',
            top: 10,
            right: 10
        }}>
            <Image source={require('../component/images/pen.png')} style={styles.icon_addFolder} />
        </TouchableOpacity>
    </TouchableOpacity>
);

const MyWord = ({ navigation }) => {
    const [listFolder, setListFolder] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [titleFolder, setTitleFolder] = useState('')
    console.log(listFolder)
    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    navigation.navigate('AddFolder');
                }}
            />
        );
    };
    return (
        <View style={styles.myWord}>
            <View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.textStyle}>Add new folder</Text>
                            <TextInput style={styles.inputAdd} placeholder='Enter folder name' onChangeText={(text) => { setTitleFolder(text) }} />
                            <View style={styles.choosen}>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle} >Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        setListFolder([...listFolder, titleFolder]),
                                            setModalVisible(!modalVisible)
                                    }}>
                                    <Text style={styles.textStyle}>Add</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>

            <View>
                <FlatList
                    data={listFolder}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}

                />
            </View>

            <View style={{
                position: 'absolute',
                bottom: 20,
                right: 20
            }}>
                <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                    <Image source={require('../component/images/add1.png')}
                        style={styles.icon_addFolder} />
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default MyWord
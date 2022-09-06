import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',
        paddingTop: 35,
        textAlign: 'center',

    },
    vocab: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
    },

    title: {

        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: "bold",

    },
    status: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: "bold"
    },
    item: {
        backgroundColor: '#696969',
        padding: 20,
        marginVertical: 8,

    },
    group: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        margin: 12,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    Search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    icon_search: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },


    frontStyle: {
        width: 360,
        height: 530,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2
    },
    backStyle: {
        width: 360,
        height: 530,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    choosen: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    button: {
        width: 110,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#ffffff',
        height: 55,
        alignItems: "center",
        margin: 30
    },
    icon_choose: {
        width: 50,
        height: 20,
        tintColor: '#ffffff'
    },
    icon_practive: {
        width: 50,
        height: 45,
        alignSelf: 'flex-end',
        tintColor: '#D2691E',
        marginRight: 20
    },
    myWord: {
        flex: 1,
    },

    icon_addFolder: {
        width: 40,
        height: 40,
        tintColor: '#D2691E',
        resizeMode: 'stretch',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    textStyle: {
        marginBottom: 15,
        fontSize: 15,
        fontWeight: "bold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20
    },
    inputAdd: {
        width: 280,
        borderBottomWidth: 2,
        borderColor: '#1E90FF',
        paddingBottom: 5,
        marginBottom: 20
    },
    folder: {
        width: 150,
        height: 150,
        borderWidth: 2,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    options: {
        backgroundColor: '#ffffff',
        marginBottom: 20,
        height: 60,
        borderRadius: 5,
    },
    check: {
        borderWidth: 3,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#D2691E',
    },
    answer: {
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 100
    },
    numberAnswer: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default styles
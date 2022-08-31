import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',
        paddingTop: 50,
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
    folder: {
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
    icon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

    choosen: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
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
    button: {
        width: 100,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#ffffff',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default styles
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    mainContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 30,
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 330,
        height: 290,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

    icons: {
        position: 'relative',
        top: 90
    },

    textContainer: {
        width: 330,
        height: 115,
        backgroundColor: '#f4ede3',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center'
    },

    title: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 75,
        marginTop: 5
    },

    button: {
        width: 105,
        height: 26,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        borderRadius: 16,
        borderColor: '#000',
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 40
    },

    buttonText: {
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 'bold'
    },

    balls: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 5,
    }

})
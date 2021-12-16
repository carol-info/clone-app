import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        height: 55,
        width: '100%',
        backgroundColor: '#fff'
    },

    searchContainer: {
        marginLeft: 20
    },

    searchIcon: {
        width: 22,
        height: 22,
        marginRight: 5
    },

    logoContainer: {
        flexDirection: 'row'
    },

    logoImage: {
        width: 18,
        height: 18,
        marginRight: 5
    },

    logoText: {
        fontSize: 17,
        textTransform: 'uppercase',
        color: '#d81b22',
        fontWeight: 'bold'
    },

    bagContainer: {
        marginRight: 20
    },

    bagIcon: {
        height: 24,
        width: 24
    }

})
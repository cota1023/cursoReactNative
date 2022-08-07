import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        // marginLeft: 10,
        // marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#ff6161',
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    listItem: {
        fontWeight: 'bold',
        flex: 1
    },
    deleteButton: {
        color: 'red'
    },
    flatListContainer: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20
    }
})
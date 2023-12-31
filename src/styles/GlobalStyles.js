import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    listItemText: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 10,
    },
    listItemContainer: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 8,
    },
    container: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 3,
    },

    fabText: {
        fontSize: 32,
        color: "#fff",
    },
});

export default GlobalStyles;

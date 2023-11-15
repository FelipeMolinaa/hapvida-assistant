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
    },
    containerCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GlobalStyles;

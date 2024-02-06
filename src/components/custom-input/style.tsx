import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    labelStyle: {
        fontSize: 18,
        color: Colors.black
    },
    input: {
        fontSize: 18,
        color: Colors.black,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8
    }
})
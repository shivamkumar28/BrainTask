import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
        marginVertical: 4,
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 10,
        borderWidth: 1
    },
    title: {
        fontSize: 18,
        color: Colors.black
    }
})
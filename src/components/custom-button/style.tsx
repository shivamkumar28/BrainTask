import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        paddingHorizontal: 22,
        paddingVertical: 12,
        borderRadius: 8
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        color: Colors.white
    }
})
import { StyleSheet } from "react-native";
import { Colors } from "../../../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 16
    },
    heading: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black
    }
})
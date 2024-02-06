import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        position: 'absolute',
        bottom: 30,
        right: 30,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    title: {
        fontSize: 36,
        color: Colors.white
    }
})
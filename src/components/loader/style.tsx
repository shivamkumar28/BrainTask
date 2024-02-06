import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    loaderView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black50
    }
})
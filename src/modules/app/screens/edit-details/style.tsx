import { StyleSheet } from "react-native";
import { Colors } from "../../../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        paddingTop: 8,
        rowGap: 16,
        alignItems: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black
    },
    label: {
        fontSize: 18,
        color: Colors.black
    },
    btnView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'space-around'
    },
    btn: {
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { ILoaderProps } from "./interface";
import { styles } from "./style";

const Loader = (props: ILoaderProps) => {
    const { size, color } = props

    return <View style={styles.loaderView}>
        <ActivityIndicator size={size} color={color} />
    </View>
};
export default Loader;

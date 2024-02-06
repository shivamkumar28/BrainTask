import { Text, TouchableOpacity, View } from "react-native"
import { IRadioButton } from "./interface"
import { styles } from "./style"
import { memo } from "react"
import { Colors } from "../../constant"

const RadioButton = (props: IRadioButton) => {
    const { isSelected, title, onPress } = props
    return <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
        <View style={{ ...styles.circle, backgroundColor: isSelected ? Colors.black : Colors.transparent }}></View>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
}

export default memo(RadioButton)
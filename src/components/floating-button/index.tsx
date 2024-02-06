import { memo } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { IFloatingButtonProps } from "./interface"

const FloatingButton = (props: IFloatingButtonProps) => {
    const { style, onPress } = props
    return <TouchableOpacity style={[styles.container, style]}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.title}>{'+'}</Text>
    </TouchableOpacity>
}

export default memo(FloatingButton)
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { memo } from "react"
import { IButtonProps } from "./interface"

const CustomButton = (props: IButtonProps) => {
    const { title, style, onPress } = props
    return <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
}

export default memo(CustomButton)
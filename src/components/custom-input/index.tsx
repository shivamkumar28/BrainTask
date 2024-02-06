import { FlatList, Text, TextInput, View } from "react-native"
import { styles } from "./style"
import { memo } from "react"
import { IInputProps } from "./interface"

const CustomInput = (props: IInputProps) => {
    const { label, value, onChangeText, inputStyle, placeholder, contentContainerStyle } = props
    return <View style={[styles.container, contentContainerStyle]}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput value={value} onChangeText={onChangeText} style={[styles.input, inputStyle]} placeholder={placeholder} />
    </View>
}

export default memo(CustomInput)
import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IInputProps {
    label: string;
    value?: string | undefined;
    onChangeText?: ((text: string) => void) | undefined;
    inputStyle?: StyleProp<TextStyle> | undefined;
    placeholder?: string | undefined;
    contentContainerStyle?: StyleProp<ViewStyle> | undefined;
}
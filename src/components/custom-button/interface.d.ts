import type { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export interface IButtonProps {
    title: string;
    style?: StyleProp<ViewStyle> | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
import type { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export interface IFloatingButtonProps {
    style?: StyleProp<ViewStyle> | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
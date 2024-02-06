import type { GestureResponderEvent } from "react-native";

export interface IRadioButton {
    isSelected: boolean;
    title: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
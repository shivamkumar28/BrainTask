import type { ColorValue } from "react-native";

export interface ILoaderProps {
    size?: number | 'small' | 'large' | undefined;
    color?: ColorValue | undefined;
}
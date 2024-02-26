import { TextInputProps } from "react-native";

export interface CTextType {
    label: string;
    isSecondary?: boolean;
}

export interface TextInputType extends TextInputProps {
    label: string;
}
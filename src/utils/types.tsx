import { TextInputProps } from "react-native";

export interface CTextType {
    label: string;
    isSecondary?: boolean;
}

export interface TextInputType extends TextInputProps {
    label: string;
}

export interface CalculateInputsType {
    numberOfItems: string;
    pricePerItem: string;
    setNumberOfItems: (value: string) => void;
    setPricePerItem: (value: string) => void;
}

export interface CalculatorButtonsType {
    clearHandler: () => void;
    calculateTotalHandler: () => void
}
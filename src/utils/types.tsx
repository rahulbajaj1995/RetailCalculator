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

export interface PriceComponentType {
    title: string;
    value: string;
    percentage?: string;
}

export interface RegionType {
    id: number;
    region: string;
    taxRate: string;
}

export interface RegionSelectionType {
    onClickHandler: (RegionType: RegionType) => void;
    selectedRegion: RegionType | null;
}

export interface RegionItemType {
    item: RegionType;
    onClickHandler: (RegionType: RegionType) => void;
    selectedRegion: RegionType | null;
}

export interface DiscountType {
    amount: number;
    discount: number;
    percentage: string;
}

export interface DiscountValueType {
    discountedPrice: number;
    percentage: string;
}

export interface CalculateTotalType {
    numberOfItems: string;
    pricePerItem: string;
    region: RegionType;
}

export interface PriceType {
    originalPrice: number;
    discountedPrice: number;
    totalAfterTax: number;
    percentage: string;
}
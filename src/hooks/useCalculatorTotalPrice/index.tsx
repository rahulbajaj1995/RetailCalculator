import { Alert } from "react-native";
import { CalculateTotalType, DiscountValueType, PriceType } from "../../utils/types";
import { constants, discountData } from "../../utils/constants";

const applyDiscount = (price: number): DiscountValueType => {
    for (const item of discountData) {
        if (price >= item.amount) {
            return { discountedPrice: price * item.discount, percentage: item.percentage };
        }
    }
    return { discountedPrice: price, percentage: '' };
};

const checkValidations = ({ numberOfItems, pricePerItem, region }: CalculateTotalType): boolean => {
    const isValidNumber = (value: string): boolean => value != '' && parseInt(value) > 0
    if (isValidNumber(numberOfItems) && isValidNumber(pricePerItem) && region != null) {
        return true
    }
    Alert.alert(constants.formErrorMessage)
    return false
}

export default function useCalculateTotal({ numberOfItems, pricePerItem, region }: CalculateTotalType): PriceType {
    if (checkValidations({ numberOfItems, pricePerItem, region })) {
        const originalPrice = parseInt(numberOfItems) * parseInt(pricePerItem)
        const { discountedPrice = 0, percentage = '' } = applyDiscount(parseInt(numberOfItems) * parseInt(pricePerItem))
        const totalAfterTax = Number((discountedPrice + (Number(region?.taxRate) / 100) * discountedPrice))
        return { originalPrice, discountedPrice, totalAfterTax, percentage }
    }
    return { originalPrice: 0, discountedPrice: 0, totalAfterTax: 0, percentage: '' }
}
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { Text, View, StyleSheet, Alert } from "react-native";
import { configurationItems, constants, discountData } from "../../utils/constants";
import CalculatorInputs from "../../components/CalculatorInputs";
import CalculatorButtons from "../../components/CalculatorButtons";
import PriceComponent from "../../components/PriceComponent";
import RegionSelection from "../../components/RegionSelection";
import { DiscountType, DiscountValueType, RegionType } from "../../utils/types";

const RetailCalculator = () => {
    const [numberOfItems, setNumberOfItems] = useState<string>('');
    const [pricePerItem, setPricePerItem] = useState<string>('');
    const [originalPrice, setOriginalPrice] = useState<number>(0);
    const [totalPriceAfterTax, setTotalPriceAfterTax] = useState<number>(0);
    const [discountedPrice, setDiscountedPrice] = useState<number>(0);
    const [discountPercentage, setDiscountPercentage] = useState<string>('');
    const [region, setRegion] = useState<RegionType | null>(null);

    const checkValidations = (): boolean => {
        const isValidNumber = (value: string): boolean => value != '' && parseInt(value) > 0
        if (isValidNumber(numberOfItems) && isValidNumber(pricePerItem) && region != null) {
            return true
        }
        Alert.alert(constants.formErrorMessage)
        return false
    }

    const applyDiscount = (price: number, discountData: DiscountType[]): DiscountValueType => {
        for (const item of discountData) {
            if (price >= item.amount) {
                return { discountedPrice: price * item.discount, percentage: item.percentage };
            }
        }
        return { discountedPrice: price, percentage: '' };
    };

    const calculateTotalHandler = () => {
        if (checkValidations()) {
            const price = parseInt(numberOfItems) * parseInt(pricePerItem);
            const { discountedPrice = 0, percentage = '' } = applyDiscount(price, discountData)
            const total = Number((discountedPrice + (Number(region?.taxRate) / 100) * discountedPrice))
            setOriginalPrice(price)
            setTotalPriceAfterTax(total)
            setDiscountedPrice(discountedPrice)
            setDiscountPercentage(percentage)
        }
    }

    const clearHandler = () => {
        setNumberOfItems('')
        setPricePerItem('')
        setOriginalPrice(0)
        setTotalPriceAfterTax(0)
        setRegion(null)
        setDiscountedPrice(0)
        setDiscountPercentage('')
    }

    const regionClickHandler = (item: RegionType) => {
        if (region != null && totalPriceAfterTax > 0)
            clearHandler()
        setRegion(item)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{constants.title}</Text>

            <CalculatorInputs
                numberOfItems={numberOfItems}
                pricePerItem={pricePerItem}
                setNumberOfItems={setNumberOfItems}
                setPricePerItem={setPricePerItem}
            />

            <RegionSelection onClickHandler={regionClickHandler} selectedRegion={region} />

            <CalculatorButtons clearHandler={clearHandler} calculateTotalHandler={calculateTotalHandler} />

            {totalPriceAfterTax > 0 &&
                <>
                    <PriceComponent title={constants.originalPrice} value={originalPrice.toString()} />
                    <PriceComponent title={constants.discountedPrice} value={originalPrice != discountedPrice ? (discountedPrice.toFixed(2)).toString() : '0'} percentage={originalPrice != discountedPrice ? ` (with ${discountPercentage} discount)` : ''} />
                    <PriceComponent title={constants.totalPrice} value={totalPriceAfterTax.toFixed(2).toString()} percentage={` (with ${region?.taxRate}% tax)`} />
                </>
            }
        </View>
    )
}

export default RetailCalculator;

const styles = StyleSheet.create({
    container: { padding: 8 },
    title: { fontSize: 16, color: colors.primary, fontWeight: '600', textAlign: 'center' },
})
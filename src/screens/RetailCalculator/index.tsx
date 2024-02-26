import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { Text, View, StyleSheet, Alert } from "react-native";
import { configurationItems, constants } from "../../utils/constants";
import CalculatorInputs from "../../components/CalculatorInputs";
import CalculatorButtons from "../../components/CalculatorButtons";
import PriceComponent from "../../components/PriceComponent";
import RegionSelection from "../../components/RegionSelection";
import { RegionType } from "../../utils/types";

const RetailCalculator = () => {
    const [numberOfItems, setNumberOfItems] = useState<string>('');
    const [pricePerItem, setPricePerItem] = useState<string>('');
    const [originalPrice, setOriginalPrice] = useState<number>(0);
    const [totalPriceAfterTax, setTotalPriceAfterTax] = useState<number>(0);
    const [region, setRegion] = useState<RegionType | null>(null);

    const checkValidations = (): boolean => {
        const isValidNumber = (value: string): boolean => value != '' && parseInt(value) > 0
        if (isValidNumber(numberOfItems) && isValidNumber(pricePerItem) && region != null) {
            return true
        }
        Alert.alert(constants.formErrorMessage)
        return false
    }

    const calculateTotalHandler = () => {
        if (checkValidations()) {
            const price = parseInt(numberOfItems) * parseInt(pricePerItem);
            const total = price + price * (Number(region?.taxRate) / 100)
            setOriginalPrice(price)
            setTotalPriceAfterTax(total)
        }
    }

    const clearHandler = () => {
        setNumberOfItems('')
        setPricePerItem('')
        setOriginalPrice(0)
        setTotalPriceAfterTax(0)
        setRegion(null)
    }

    const regionClickHandler = (item: RegionType) => {
        if (region != null)
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
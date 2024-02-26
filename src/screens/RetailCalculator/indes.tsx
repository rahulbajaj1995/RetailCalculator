import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { Text, View, StyleSheet } from "react-native";
import { constants } from "../../utils/constants";
import CalculatorInputs from "../../components/CalculatorInputs";
import CalculatorButtons from "../../components/CalculatorButtons";

const RetailCalculator = () => {
    const [numberOfItems, setNumberOfItems] = useState<string>('');
    const [pricePerItem, setPricePerItem] = useState<string>('');

    const calculateTotalHandler = () => { }
    const clearHandler = () => { }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{constants.title}</Text>

            <CalculatorInputs
                numberOfItems={numberOfItems}
                pricePerItem={pricePerItem}
                setNumberOfItems={setNumberOfItems}
                setPricePerItem={setPricePerItem}
            />

            <CalculatorButtons clearHandler={clearHandler} calculateTotalHandler={calculateTotalHandler} />
        </View>
    )
}

export default RetailCalculator;

const styles = StyleSheet.create({
    container: { padding: 8 },
    title: { fontSize: 16, color: colors.primary, fontWeight: '600', textAlign: 'center' },
})
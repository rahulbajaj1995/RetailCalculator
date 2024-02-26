import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { constants } from "../../utils/constants";
import CalculatorInputs from "../../components/CalculatorInputs";

const RetailCalculator = () => {
    const [numberOfItems, setNumberOfItems] = useState<string>('');
    const [pricePerItem, setPricePerItem] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{constants.title}</Text>

            <CalculatorInputs
                numberOfItems={numberOfItems}
                pricePerItem={pricePerItem}
                setNumberOfItems={setNumberOfItems}
                setPricePerItem={setPricePerItem}
            />

            <View style={styles.buttonContainer}>
                <Pressable style={styles.clearButton}>
                    <Text style={[styles.title, { color: colors.primary }]}>{constants.clear}</Text>
                </Pressable>
                <Pressable style={styles.calculateTotalButton}>
                    <Text style={[styles.title, { color: colors.white }]}>{constants.calculateTotal}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RetailCalculator;

const styles = StyleSheet.create({
    container: { padding: 8 },
    title: { fontSize: 16, color: colors.primary, fontWeight: '600', textAlign: 'center' },
    buttonContainer: { flexDirection: 'row', marginBottom: 12 },
    clearButton: { flex: 1, borderColor: colors.primary, borderWidth: 1, borderRadius: 8, padding: 8, marginRight: 8, marginTop: 8 },
    calculateTotalButton: { flex: 1, borderColor: colors.primary, backgroundColor: colors.primary, borderWidth: 1, borderRadius: 8, padding: 8, marginRight: 8, marginTop: 8 },
})
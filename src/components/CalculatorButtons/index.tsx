import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import { CalculatorButtonsType } from "../../utils/types";

const CalculatorButtons = ({ clearHandler, calculateTotalHandler }: CalculatorButtonsType) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.clearButton} onPress={clearHandler}>
                <Text style={[styles.title, { color: colors.primary }]}>{constants.clear}</Text>
            </Pressable>
            <Pressable testID={'calculateButtonId'} style={styles.calculateTotalButton} onPress={calculateTotalHandler}>
                <Text style={[styles.title, { color: colors.white }]}>{constants.calculateTotal}</Text>
            </Pressable>
        </View>
    )
}
export default CalculatorButtons;

const styles = StyleSheet.create({
    title: { fontSize: 16, color: colors.primary, fontWeight: '600', textAlign: 'center' },
    buttonContainer: { flexDirection: 'row', marginBottom: 12 },
    clearButton: { flex: 1, borderColor: colors.primary, borderWidth: 1, borderRadius: 8, padding: 8, marginRight: 8, marginTop: 8 },
    calculateTotalButton: { flex: 1, borderColor: colors.primary, backgroundColor: colors.primary, borderWidth: 1, borderRadius: 8, padding: 8, marginRight: 8, marginTop: 8 },
})
import React from "react";
import { colors } from "../../utils/colors";
import { Text, View, StyleSheet } from "react-native";
import { constants } from "../../utils/constants";

const RetailCalculator = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{constants.title}</Text>
        </View>
    )
}

export default RetailCalculator;

const styles = StyleSheet.create({
    container: { padding: 8 },
    title: { fontSize: 16, color: colors.primary, fontWeight: '600', textAlign: 'center' }
})
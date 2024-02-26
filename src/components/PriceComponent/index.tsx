import React from "react";
import { colors } from "../../utils/colors";
import { StyleSheet, Text, View } from 'react-native';
import { PriceComponentType } from "../../utils/types";

const PriceComponent = ({ title, value, percentage }: PriceComponentType) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: colors.black80 }}>{title}</Text>
            <Text style={styles.valueStyle}>{`$${value}`}</Text>
            <Text style={styles.valueStyle}>{percentage}</Text>
        </View>
    )
}

export default PriceComponent;
const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: 12 },
    valueStyle: { color: colors.primary, fontWeight: 'bold' },
})
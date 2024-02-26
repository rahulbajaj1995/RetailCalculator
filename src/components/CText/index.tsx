import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../utils/colors";
import { CTextType } from "../../utils/types";

const CText = ({ label, isSecondary }: CTextType) => <Text style={isSecondary ? styles.secondaryLabel : styles.label}>{label}</Text>

export default CText;
const styles = StyleSheet.create({
    label: { fontSize: 12, color: colors.primary, fontWeight: '400' },
    secondaryLabel: { fontSize: 12, color: colors.white, fontWeight: '400' }
})
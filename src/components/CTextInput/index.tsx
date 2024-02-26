import React from "react";
import CText from "../CText";
import { colors } from "../../utils/colors";
import { TextInputType } from "../../utils/types";
import { View, TextInput, StyleSheet } from "react-native";

const CTextInput = ({ label, ...props }: TextInputType) => {
    return (
        <View style={styles.container}>
            <CText label={label} />
            <TextInput {...props} style={styles.inputStyle} />
        </View>
    )
}
export default CTextInput;

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    inputStyle: { borderColor: colors.primary, borderWidth: 1, borderRadius: 8, marginTop: 8, padding: 12 }
})
import React from "react";
import { View, Pressable, StyleSheet, FlatList } from "react-native";
import CText from "../CText";
import { colors } from "../../utils/colors";
import { constants, regions } from "../../utils/constants";
import { RegionItemType, RegionSelectionType } from "../../utils/types";

const RegionItem = ({ item, onClickHandler, selectedRegion }: RegionItemType) => {
    return (
        <Pressable
            testID={'regionItemId'}
            key={item.id}
            style={selectedRegion != null && selectedRegion.id == item.id ? styles.selectedButtonContainer : styles.buttonContainer}
            onPress={() => onClickHandler(item)}>
            <CText label={item.region} isSecondary={selectedRegion != null && selectedRegion.id == item.id} />
        </Pressable>
    )
}

const RegionSelection = ({ onClickHandler, selectedRegion }: RegionSelectionType) => {
    return (
        <View style={styles.container}>
            <CText label={constants.regionSelection} />

            <FlatList
                testID={'regionListId'}
                horizontal
                data={regions}
                contentContainerStyle={{ marginTop: 8 }}
                renderItem={({ item }) => <RegionItem key={item.id} item={item} onClickHandler={onClickHandler} selectedRegion={selectedRegion} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}
export default RegionSelection;

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    buttonContainer: { borderColor: colors.primary, borderWidth: 1, borderRadius: 8, padding: 8, marginRight: 8 },
    selectedButtonContainer: { borderColor: colors.primary, backgroundColor: colors.primary, borderWidth: 1, borderRadius: 8, padding: 8, marginRight: 8 }
})
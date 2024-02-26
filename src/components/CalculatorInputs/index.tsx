import React from "react";
import CTextInput from "../CTextInput";
import { constants } from "../../utils/constants";
import { CalculateInputsType } from "../../utils/types";

const CalculatorInputs = ({ numberOfItems, pricePerItem, setNumberOfItems, setPricePerItem }: CalculateInputsType) => {
    return (
        <>
            <CTextInput
                testID={'numberOfItemsId'}
                value={numberOfItems}
                maxLength={3}
                numberOfLines={1}
                keyboardType="number-pad"
                label={constants.numberOfItems}
                placeholder={constants.numberOfItems}
                onChangeText={setNumberOfItems}
            />

            <CTextInput
                testID={'pricePerItemId'}
                value={pricePerItem}
                maxLength={5}
                numberOfLines={1}
                keyboardType="number-pad"
                label={constants.pricePerItem}
                placeholder={constants.pricePerItem}
                onChangeText={setPricePerItem}
            />
        </>
    )
}

export default CalculatorInputs;
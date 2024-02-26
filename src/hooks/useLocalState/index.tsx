import { ActionTypes } from "../../utils/constants";
import { PriceType } from "../../utils/types";

interface Action {
    type: string;
    payload: PriceType;
}

export const initialState: PriceType = {
    originalPrice: 0,
    discountedPrice: 0,
    percentage: '',
    totalAfterTax: 0
}

export const reducer = (state: PriceType, action: Action): PriceType => {
    switch (action.type) {
        case ActionTypes.UPDATE_PRICE:
            return {
                ...state,
                originalPrice: action?.payload?.originalPrice,
                discountedPrice: action?.payload?.discountedPrice,
                percentage: action?.payload?.percentage,
                totalAfterTax: action?.payload?.totalAfterTax
            };
        default:
            return state;
    }
};
import { DiscountType, RegionType } from "./types"

export const constants = {
    title: 'Retail Calculator',
    numberOfItems: 'Number Of Items',
    pricePerItem: 'Price Per Item',
    calculateTotal: 'Calculate Total',
    clear: 'Clear',
    formErrorMessage: 'Please validate the form details',
    originalPrice: 'Original Price : ',
    totalPrice: 'Total Price : ',
    regionSelection: 'Region Type Selection',
    discountedPrice: 'Discounted Price : ',
}

export const regions: RegionType[] = [
    {
        id: 1,
        region: 'AUK',
        taxRate: '6.85'
    }, {
        id: 2,
        region: 'WLG',
        taxRate: '8.00'
    }, {
        id: 3,
        region: 'WAI',
        taxRate: '6.25'
    }, {
        id: 4,
        region: 'CHC',
        taxRate: '4.00'
    }, {
        id: 5,
        region: 'TAS',
        taxRate: '8.25'
    }
]

export const discountData: DiscountType[] = [
    { amount: 50000, discount: 0.85, percentage: '15%' },
    { amount: 10000, discount: 0.9, percentage: '10%' },
    { amount: 7000, discount: 0.93, percentage: '7%' },
    { amount: 5000, discount: 0.95, percentage: '5%' },
    { amount: 1000, discount: 0.97, percentage: '3%' },
];

export const ActionTypes = {
    UPDATE_PRICE: 'UPDATE_PRICE'
}
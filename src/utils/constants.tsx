import { RegionType } from "./types"

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
}

export const configurationItems = {
    taxRate: 6.85
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
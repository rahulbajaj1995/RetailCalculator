import React from "react";
import RetailCalculator from "../src/screens/RetailCalculator";
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react-native'
import { constants } from "../src/utils/constants";
import CalculatorInputs from "../src/components/CalculatorInputs";

describe('RetailCalculator component', () => {
    it('RetailCalculator Snapshot test', () => {
        const snapshot = renderer.create(<RetailCalculator />).toJSON();
        expect(snapshot).toMatchSnapshot()
    })

    it('should render Retail Calculator title', () => {
        const { getByText } = render(<RetailCalculator />);
        const title = getByText(constants.title)
        expect(title).toBeTruthy()
    })
})

describe('CalculatorInputs component', () => {
    it('renders numberOfItems input field correctly', () => {
        const { getByTestId } = render(<CalculatorInputs
            numberOfItems=''
            pricePerItem=''
            setNumberOfItems={() => null}
            setPricePerItem={() => null}
        />);
        const numberOfItemsInput = getByTestId('numberOfItemsId');
        expect(numberOfItemsInput).toBeDefined();
        expect(numberOfItemsInput.props.placeholder).toBe(constants.numberOfItems);
    });

    it('renders pricePerItem input field correctly', () => {
        const { getByTestId } = render(<CalculatorInputs
            numberOfItems=''
            pricePerItem=''
            setNumberOfItems={() => null}
            setPricePerItem={() => null}
        />);

        const pricePerItemInput = getByTestId('pricePerItemId');
        expect(pricePerItemInput).toBeDefined();
        expect(pricePerItemInput.props.placeholder).toBe(constants.pricePerItem);
    });
})
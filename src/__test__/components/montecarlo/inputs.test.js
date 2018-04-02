import Inputs from '../../../components/montecarlo/Inputs';
import React from 'react';
import { mount, shallow } from 'enzyme';


describe('Inputs', () => {
  it('If price input is not a finite number, the label will indicate that Price must be number', () => {
    const testPrice = shallow(
      <Inputs
        price="0.00"
        volatility="0.00"
        handlePriceChange={() => {}}
        handleVolatilityChange={() => {}}
      />,
    );
    expect(testPrice.text()).toContain('Price');
  });

  it('If price input is not a finite number, the label will indicate that Price must be number', () => {
    const testPrice = shallow(
      <Inputs
        price="0.00a"
        volatility="0.00"
        handlePriceChange={() => {}}
        handleVolatilityChange={() => {}}
      />,
    );
    expect(testPrice.text()).toContain('Price must be a number');
  });
});

describe('Inputs', () => {
  it('If volatility input is not a finite number, the label will indicate that it must be number', () => {
    const testVolatility = shallow(
      <Inputs
        price="0.00"
        volatility="0.00aad"
        handlePriceChange={() => {}}
        handleVolatilityChange={() => {}}
      />,
    );
    expect(testVolatility.text()).toContain('Volatility must be a number');
  });

  it('If volatility input is a finite number, the label will indicate that it must be whole percent', () => {
    const testVolatility = shallow(
      <Inputs
        price="0.00a"
        volatility="0.00"
        handlePriceChange={() => {}}
        handleVolatilityChange={() => {}}
      />,
    );
    expect(testVolatility.text()).toContain('Volatility as a whole percent (like 12.55)');
  });
});

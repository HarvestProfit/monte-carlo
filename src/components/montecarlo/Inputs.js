import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const Inputs = (props) => {
  const {
    price,
    volatility,
  } = props;
  const priceIsValid = _.isFinite(_.toNumber(price));
  const volatilityIsValid = _.isFinite(_.toNumber(volatility));
  return (
    <div className="col-12 col-sm-6">
      <div className="form-group">
        <label htmlFor="volatility">
          Volatility{!volatilityIsValid ? ' must be a number' : ' as a whole percent (like 12.55)'}
        </label>
        <input
          className={volatilityIsValid ? 'form-control' : 'form-control is-invalid'}
          id="volatility"
          onChange={event => props.handleVolatilityChange(event.target.value)}
          type="text"
          value={volatility}
        />
        <br />
        <label htmlFor="price">
          Price{!priceIsValid && ' must be a number'}
        </label>
        <input
          className={priceIsValid ? 'form-control' : 'form-control is-invalid'}
          id="price"
          onChange={event => props.handlePriceChange(event.target.value)}
          type=""
          value={price}
        />
      </div>
    </div>
  );
}

Inputs.propTypes = {
  price: PropTypes.string.isRequired,
  volatility: PropTypes.string.isRequired,
  handleVolatilityChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
};

export default Inputs;

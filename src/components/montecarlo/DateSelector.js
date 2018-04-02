import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = (props) => {
  const {
    startDate,
    endDate,
  } = props;
  const validStartDate = startDate !== null;
  const validEndDate = validStartDate ? startDate.diff(endDate, 'days') < 0 : endDate !== null;
  return (
    <div className="col-12 col-sm-6">
      <div className="form-group">
        <label htmlFor="startDate">
          Start Date
          <DatePicker
            className={validStartDate ? 'form-control' : 'form-control is-invalid'}
            id="startDate"
            selected={startDate}
            onChange={props.handleStartDateChange}
          />
        </label>
        <br />
        <label htmlFor="endDate">
          End Date{!validEndDate && ` must be greater than ${startDate.format('L')}`}
          <DatePicker
            className={validEndDate ? 'form-control' : 'form-control is-invalid'}
            id="endDate"
            selected={endDate}
            onChange={props.handleEndDateChange}
          />
        </label>
      </div>
    </div>
  );
};

DateSelector.propTypes = {
  // eslint-disable-next-line
  endDate: PropTypes.object.isRequired,
  // eslint-disable-next-line
  startDate: PropTypes.object.isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
};

export default DateSelector;

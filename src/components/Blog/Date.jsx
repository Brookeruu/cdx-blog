import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

const Date = (props) => {
  const [date, setDate] = useState();

  const handleChange = (input) => {
    const newDate = moment(input).format('LL');
    setDate(input);
    props.onDate(newDate);
  };

  return (
    <div>
    <DatePicker 
      selected={ date }
      onChange={ handleChange }
      name="startDate"
      dateFormat="MM/dd/yyy"
      placeholderText="Select Date"
      className="input"
    />
    </div>
  );
};

export default Date;

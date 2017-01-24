// This component is part of the header to represent the Address.

import React, { PropTypes } from 'react';
import { render } from 'react-dom';

const Address = ({street, houseNo, city, state, country, zipcode}) => {
  let addressStyle = {
    color: "navy",
    textAlign: "center",
  }

  return <div style={addressStyle}>{street}, #{houseNo}. {city}. {state}. {country}. {zipcode}</div>
}


export default Address;
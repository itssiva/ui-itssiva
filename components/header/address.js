// This component is part of the header to represent the Address.

import React, { PropTypes } from 'react';
import { render } from 'react-dom';

const Address = ({ address }) => {
  let { street, city, state, country, zipcode } = address;
  let addressStyle = {
    color: "navy",
    textAlign: "center",
  }

  return <div style={addressStyle}>{street}, {city}. {state}. {country}. {zipcode}</div>
}


export default Address;
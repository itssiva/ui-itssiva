import React from 'react';

import Name from './name';
import Address from './address';

  
const Header = () => (
  <div>
    <Name firstName="Siva" lastName="Ponugoti" />
    <Address 
      street="39900 Blacow Rd"
      houseNo="41"
      city="Fremont"
      state="CA"
      country="USA"
      zipcode="94538"
    />
  </div>
)

export default Header
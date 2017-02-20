import React from 'react';

import Name from './name';
import Address from './address';
import ContactDetals from './contact_details';

  
const Header = ({ name, contactDetails, address }) => (
  <div>
    <Name name={name} />
    <Address address={address}/>
    <ContactDetals contactDetails={contactDetails}/>
  </div>
)

export default Header
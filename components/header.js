// We need to import React eventhough we are not using it directly. It is used in background while transpiling JSX to Javascript

import React from 'react';
import { render } from 'react-dom';

function Header({ firstName, lastName }) {
  return <div>{firstName} {lastName}</div>
}


export default Header;

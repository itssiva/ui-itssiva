// We need to import React eventhough we are not using it directly. It is used in background while transpiling JSX to Javascript

import React, { PropTypes } from 'react';
import { render } from 'react-dom';

const Name = ({ name }) => {
  let { firstName, lastName } = name;
  let nameStyle = {
    color: "navy",
    lineHeight: 2,
    fontWeight: "bold",
    textAlign: "center",
  }
  return <div style={nameStyle}>{firstName} {lastName}</div>
}

Name.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  middleName: PropTypes.string,
}

export default Name;

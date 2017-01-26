import React from 'react';

const Degree = ({ degree }) => {
  console.log('Degree is', degree);
  var {level, major, schoolName, location, startYear, endYear} = degree;
  console.log('Received are ', level, major, schoolName, location, startYear, endYear);
  return (
    <li>
        <div>{level} in {major} ({startYear} - {endYear})</div>
        <div>{schoolName}</div>
        {location}
    </li>
  )
}

export default Degree;
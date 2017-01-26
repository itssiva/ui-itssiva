import React from 'react';

const Degree = ({ degree }) => {
  console.log('Degree is', degree);
  var {level, major, schoolName, location, startYear, endYear} = degree;
  console.log('Received are ', level, major, schoolName, location, startYear, endYear);
  return (
    <li>
      <ol>
        <li>{level}</li>
        <li>{major}</li>
        <li>{schoolName}</li>
        <li>{location}</li>
        <li>{startYear} - {endYear}</li>
      </ol>
    </li>
  )
}

export default Degree;
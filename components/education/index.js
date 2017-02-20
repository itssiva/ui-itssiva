import React from 'react';
import Degree from './degree'


const Education = ({educationDegrees}) => {
  console.log('Degrees are ', JSON.stringify(educationDegrees));
  let listOfDegrees = educationDegrees.map((degree, index) => {
    return <Degree key={degree.degree} degree={degree} />
  });
  return <ul>{listOfDegrees}</ul>;
}

export default Education;
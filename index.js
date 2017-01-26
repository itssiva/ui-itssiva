import React from 'react';
import {render} from 'react-dom';
import Header from './components/header/';
import Education from './components/education/'

let educationDegrees = [
  {
    level: "Masters",
    major: "Computer Science",
    schoolName: "University of North Carolina at Charlotte",
    location: "NC, USA",
    startYear: 2014,
    endYear: 2015,
  },
  {
    level: "Bachelor of Technology",
    major: "Information Technology",
    schoolName: "Andhra University",
    location: "Visakhapatnam, AP, India",
    startYear: 2010,
    endYear: 2014,
  },
]

render(
  (<div>
    <Header />
    <Education educationDegrees={educationDegrees}/>

  </div>),
  document.getElementById('app')
);



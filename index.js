import React from 'react';
import {render} from 'react-dom';
import Header from './components/header/';
import Education from './components/education/'

const contactDetails = {
  mobileNo: "(980) 729-1375",
  email: "sivaponugoti@gmail.com",
};

const name = {
  firstName: "Siva",
  lastName: "Ponugoti",
};

const address = {
  street: "39900 Blacow Rd",
  city: "Fremont",
  state: "CA",
  country: "USA",
  zipcode: "94538",
};

const educationDegrees = [
  {
    level: "Masters",
    major: "Computer Science",
    schoolName: "University of North Carolina at Charlotte",
    location: "Charlotte, NC, USA",
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
    <Header name={name} contactDetails={contactDetails} address={address}/>
    <Education educationDegrees={educationDegrees}/>

  </div>),
  document.getElementById('app')
);



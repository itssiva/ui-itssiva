import React from 'react';
import {render} from 'react-dom';
import Header from './components/header/';
import Education from './components/education/'
import WorkExperience from './components/workExperience/'

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

const workExperience = [
  {
    title: "Software Engineer Trainee",
    company: "Infosys Technologies Ltd.",
    location: {
      city: "Mysore",
      state: "Karnataka",
      country: "India",
    },
    "from": "05-2014",
    "to": "07-2014",
  },
  {
    title: "Software Engineer",
    company: "Yewno Inc.",
    location: {
      city: "Redwood City",
      state: "CA",
      country: "USA",
    },
    "from": "04-2016",
  }
]



render(
  (<div>
    <Header name={name} contactDetails={contactDetails} address={address} />
    <Education educationDegrees={educationDegrees} />
    <WorkExperience workExperience={workExperience} />
  </div>),
  document.getElementById('app')
);



import React from 'react';
import {render} from 'react-dom';
import Header from './components/header/';
import Education from './components/education/'
import WorkExperience from './components/workExperience/'

// const contactDetails = {
//   mobileNo: "(980) 729-1375",
//   email: "sivaponugoti@gmail.com",
// };

// const name = {
//   firstName: "Siva",
//   lastName: "Ponugoti",
// };

// const address = {
//   street: "39900 Blacow Rd",
//   city: "Fremont",
//   state: "CA",
//   country: "USA",
//   zipcode: "94538",
// };

// const educationDegrees = [
//   {
//     level: "Masters",
//     major: "Computer Science",
//     schoolName: "University of North Carolina at Charlotte",
//     location: "Charlotte, NC, USA",
//     startYear: 2014,
//     endYear: 2015,
//   },
//   {
//     level: "Bachelor of Technology",
//     major: "Information Technology",
//     schoolName: "Andhra University",
//     location: "Visakhapatnam, AP, India",
//     startYear: 2010,
//     endYear: 2014,
//   },
// ]

// const workExperience = [
//   {
//     title: "Software Engineer Trainee",
//     company: "Infosys Technologies Ltd.",
//     location: {
//       city: "Mysore",
//       state: "Karnataka",
//       country: "India",
//     },
//     "from": "05-2014",
//     "to": "07-2014",
//   },
//   {
//     title: "Software Engineer",
//     company: "Yewno Inc.",
//     location: {
//       city: "Redwood City",
//       state: "CA",
//       country: "USA",
//     },
//     "from": "04-2016",
//   }
// ]

class ResumeContainer extends React.Component {
  constructor(){
    super()
    this.state = { loading: true };
  }


  componentDidMount() {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    fetch('http://localhost:3000/', { headers })
    .then((response) => {
      // console.log('Resume details are ', response.json());
      // this.setState({ loading: false, name: response.resume.name });
      return response.json()
    })
    .then((response) => {
      console.log('Resume details are ', JSON.stringify(response));
      this.setState({ loading: false,  resume: response.resume });
    })
    .catch((err) => {
      console.log('Error is', err);
      this.setState({});
    })
  }

  render() {
    if (!this.state.loading) {
      console.log('Values are ', name, contactDetails, educationDegrees, workExperience, address);
      let { name, contactDetails, educationDegrees, workExperience, address } = this.state.resume;
      return (<div>
        <Header name={name} contactDetails={contactDetails} address={address} />
        <Education educationDegrees={educationDegrees} />
        <WorkExperience workExperience={workExperience} />
      </div>)
    } else {
      return <div>Loading....</div>
    }
  }
}



render(<ResumeContainer/>, document.getElementById('app'));


// render(
//   (<div>
//     <Header name={name} contactDetails={contactDetails} address={address} />
//     <Education educationDegrees={educationDegrees} />
//     <WorkExperience workExperience={workExperience} />
//   </div>),
//   document.getElementById('app')
// );



import React from 'react';

const ContactDetails = ({ contactDetails }) => {
  let { mobileNo, email } = contactDetails;

  let contactStyle = {
    color: "navy",
    lineHeight: 2,
    fontWeight: "bold",
    textAlign: "center",
  };
  return <div style={contactStyle}>{mobileNo}. {email}</div>
}

export default ContactDetails;
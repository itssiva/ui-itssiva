import React from 'react';

const Work = ({ work }) => {
  let {title, company, location, from, to} = work;
  return <div key={title}>{title}</div>
}

export default Work;
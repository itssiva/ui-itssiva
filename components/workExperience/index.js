import React from 'react';
import Work from './workExperience'

const WorkExperience = ({ workExperience }) => {
  let workExperienceJSX = workExperience.map((work) => {
    return <Work work={work} />
  });
  return <div>{workExperienceJSX}</div>
}

export default WorkExperience;
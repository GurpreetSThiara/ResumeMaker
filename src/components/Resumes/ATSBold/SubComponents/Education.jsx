import { List, ListItem } from '@chakra-ui/react';
import React from 'react'
import { Reorder, motion } from "framer-motion";
const Education = ({state,fontSizes,data}) => {
  return (
    <div>
           {state.Education && (
            <div className="ATSBold-education">
              <div className="ATSBold-subheading " style={{fontSize:fontSizes.header}}>Education</div>
              <div className="ATSBold-education-content ">
       

                {data.education.map((education, i) => {
                  return (
                    <div key={i} className="">
                      <div className="">
                        <h4  style={{fontSize:fontSizes.subheading}}>{education.institution}</h4>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>{education.degree}</p>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>Graduation year: {education.graduationYear}</p>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>gpa: {education.gpa}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
    </div>
  )
}

export default Education

import { List, ListItem } from '@chakra-ui/react';
import React from 'react'
import { Reorder, motion } from "framer-motion";
const Experience = ({data,state,fontSizes,setExperience}) => {
  return (
    <div>
          {
            state.Experience && (
              <div className="ATSBold-experience">
                <div className="ATSBold-subheading" style={{fontSize:fontSizes.header}}>Experience</div>
                <div className="flexgap">
                <List
                
                 m={'0'}
                 p={'0'}
                className="flexgap"
                as={Reorder.Group}
                values={data.experience}
                onReorder={(experience) => {
                  console.log("reorder");
                  setExperience(experience);
                }}
              >
                {data.experience.map((experience, i) => {
                  return (
                    <ListItem
                   
                   
                      key={experience.description}
                      as={Reorder.Item}
                      value={experience}
                      className=""
                 
                    >
                        <div key={i} className="">
                        <div className="">
                          <h4  style={{fontSize:fontSizes.subheading}}>{experience.role}</h4>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>
                            from {experience.from} to {experience.to}
                          </p>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>{experience.description}</p>
                        </div>

                        <div style={{ fontSize: fontSizes.description }} className="">
                   <ul >
                   {experience.more.map((more, index) => (
                     <li style={{ marginBottom:'0.5rem'}} key={more}>
                     {more}
                     </li>
                    ))}
                   </ul>
                  </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
                  {/* {data.experience.map((experience, i) => {
                    return (
                      <div key={i} className="">
                        <div className="">
                          <h4>{experience.role}</h4>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>
                            from {experience.from} to {experience.to}
                          </p>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>{experience.description}</p>
                        </div>
                      </div>
                    );
                  })} */}
                </div>
              </div>
            )
       
          }
    </div>
  )
}

export default Experience

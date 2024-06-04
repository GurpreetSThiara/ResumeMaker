import { List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { Reorder } from 'framer-motion';

const Skill = ({ state, data, fontSizes, setDataSkills }) => {
  return (
    <div>
      {state.Skills && (
        <div className="ATSBold-skills">
          <div className="ATSBold-subheading" style={{ fontSize: fontSizes.header }}>Skills</div>
          <Reorder.Group
          style={{padding:'0'}}
          
            className="flexgap"
            axis="y"
            values={data.skills}
            onReorder={(updatedSkills) => {
              setDataSkills(updatedSkills);
            }}
            layoutScroll
          >
            {data.skills.map((skill, i) => (
              <Reorder.Item key={skill.title} value={skill}>
              
                  <div className="">
                    <h4 style={{ fontSize: fontSizes.subheading }}>{skill.title}</h4>
                  </div>
                  <div className="">
                    <p style={{ fontSize: fontSizes.description }}>{skill.content}</p>
                  </div>
                  <div style={{ fontSize: fontSizes.description }} className="">
                    {skill.more.map((more, index) => (
                      <div key={more} className="">{more}</div>
                    ))}
                  </div>
            
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      )}
    </div>
  );
};

export default Skill;

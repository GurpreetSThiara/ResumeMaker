import { List, ListItem } from '@chakra-ui/react';
import React from 'react'
import { Reorder, motion } from "framer-motion";

const Projects = ({state, fontSizes,data,setProjects}) => {
  return (
    <div>
            {state.Projects && (
            <div className="ATSBold-projects">
              <div className="ATSBold-subheading" style={{fontSize:fontSizes.header}}>Projects</div>
              <List
               m={'0'}
               p={'0'}
                  className="flexgap"
                as={Reorder.Group}
                values={data.projects}
                onReorder={(projects) => {
                  setProjects(projects);
                }}
              >
                {data.projects.map((project, i) => {
                  return (
                    <ListItem
                      key={project.title}
                      as={Reorder.Item}
                      value={project}
                      className=""
                    >
                      <div key={project.title} className="">
                        <div className="">
                          <h4  style={{fontSize:fontSizes.subheading}}>{project.title}</h4>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>{project.description}</p>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>Technologies: {project.technologies}</p>
                        </div>
                        <div className="">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.link}
                          </a>
                        </div>
                        {project.more.map((more, index) => (
                      <div key={more} className="">{more}</div>
                    ))}
                      </div>
                    </ListItem>
                  );
                })}
              </List>
             
            </div>
          )}

    </div>
  )
}

export default Projects

import { List, ListItem } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
import React from 'react'

const Links = ({links,state,fontSizes,setLinks}) => {
  return (
    <div>
    {state.Links && (
    <div className="ATSBold-projects">
      <div className="ATSBold-subheading" style={{fontSize:fontSizes.header}}>Links</div>
      <List
          className="flexgap"
        as={Reorder.Group}
        values={links}
        onReorder={(l) => {
          setLinks(l);
        }}
      >
        {links.map((link, i) => {
          return (
            <ListItem
              key={link.value}
              as={Reorder.Item}
              value={link}
              className=""
            >
              <div key={link.value} className="flex items-center gap-1 ">
                <div className="">
                  <h4  style={{fontSize:fontSizes.subheading}}>{link.key}</h4>
                </div>
                <div className="">
                  <p style={{fontSize:fontSizes.description}}>{<a href={link.value}>{link.value}</a>}</p>
                </div>
                
           
                {link.more.map((more, index) => (
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

export default Links

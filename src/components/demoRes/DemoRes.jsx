import React, { useState } from 'react';
import './DemoRes.css'; // Import your CSS file
import { MdEmail, MdLocationOn, MdPerson, MdPhone } from 'react-icons/md';

const Demores = () => {
  const [data, setData] = useState({
    name: "John Doe",
    role: "Full Stack Developer",
    profileDescription:
      "Results-driven Full Stack Developer with [X years] of experience in designing, developing, and implementing scalable web applications. Proficient in both front-end and back-end technologies, with a strong focus on delivering high-quality code and intuitive user experiences.",
    contact: {
      address: "512 Moore Street, Indigo Valley, San Diego, California",
      email: "johndoe@email.com",
      phone: "872-234-3355",
      linkedin: "linkedin of johndoe",
    },
    skills: [
      {
        title: "Front-end Development",
        content:
          "Proficient in HTML, CSS, and JavaScript. Experience with React.js for building interactive user interfaces.",
      },
      {
        title: "Back-end Development",
        content:
          "Skilled in server-side languages such as Node.js and frameworks like Express.js. Knowledge of RESTful API design.",
      },
      {
        title: "Database Management",
        content:
          "Familiarity with database systems such as MongoDB and SQL databases like PostgreSQL or MySQL.",
      },
      {
        title: "Version Control",
        content:
          "Proficient in using Git and GitHub for version control and collaboration with other developers.",
      },
    ],
    experience: [
      {
        role: "Front-end Developer at Company X",
        description:
          "Developed user interfaces using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs. Utilized React.js to create interactive and dynamic web applications.",
      },
      {
        role: "Back-end Developer at Company Y",
        description:
          "Implemented server-side logic using Node.js and Express.js. Designed and maintained RESTful APIs for data exchange between front-end and back-end systems. Managed database systems including MongoDB and MySQL.",
      },
    ],
    education: [
        {
          institution: "University XYZ",
          degree: "Bachelor of Science in Computer Science",
          graduationYear: "201X",
        },
        {
          institution: "ABC College",
          degree: "Master of Science in Software Engineering",
          graduationYear: "201Y",
        },
      ],
  });

  const HeadingText = ({ text }) => {
    return <h2 className="heading-text">{text.toUpperCase()}</h2>;
  };

  const Divider = () => {
    return <div className="divider"></div>;
  };

  const ContactItem = ({ icon, text }) => {
    return (
      <div className="contact-item flex">
        <div className="icon">{icon}</div>
        <div className="textsmall">{text}</div>
      </div>
    );
  };

  const SubHeading = ({ text }) => {
    return (
      <div className="sub-heading">
        {text}
      </div>
    );
  }
  
  

  return (
    <div className="resume flex">
      <div className="left-section flex col center start "  >
        <div className="profile-image-container">
            <img className='profile-image' src={"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1714915681~exp=1714919281~hmac=b729b711ae6017314dd8b875cbd6574a883b78066d5c954945f431bae840e3e4&w=1060"} alt="" />
        </div>
        <div className="">
        
          <p className='profile-description textjustify '>{data.profileDescription}</p>
        </div>
  
       {/* Contact Section */}
          <div className="contact-container">
      <HeadingText text="CONTACT" />
      <Divider />

          <ContactItem
            icon={<MdLocationOn size={24} />}
            text={data.contact.address}
          />
   
          <ContactItem
            icon={<MdEmail size={24} />}
            text={<a className='link-color' rel="noopener noreferrer" href={data.contact.email}>{data.contact.email}</a>}
          />

          <ContactItem
            icon={<MdPhone size={24} />}
            text={data.contact.phone}
          />
     
          <ContactItem
            icon={<MdPerson size={24} />}
            text={<a className='link-color' rel="noopener noreferrer" href={data.contact.linkedin}> {data.contact.linkedin}</a>}
          />
      </div>

    {/* Education Section */}

    <div className="education-container">
        <HeadingText text={'EDUCATION'}/>
        <Divider/>
      <div className="flex col gap">
      {data.education.map((edu , index)=>{
            return <div key={index} className="">
                <SubHeading className='textsmall' text={edu.degree}/>
                <p className='textsmall'>{edu.institution}</p>
                <p className='textsmall'>passing year: {edu.graduationYear}</p>
            </div>
        })}
      </div>

    </div>
   
       
       
      </div>
      <div className="right-section flex col">
        <div className="header">
            <h1 className='header-name ucase bold'>{data.name}</h1>
            <p>{data.role}</p>
        </div>

        <div className="right-section-content flex col">
        <div className="experience">
        <HeadingText text="experience" />
      <Divider />
        <div className="flex col gap">
        {data.experience.map((exp, index) => (
            <div key={index} className=" flex col experience-item mingap">
              <SubHeading text={exp.role}/>
              <p className='textcolor'>{exp.description}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="skills">
        <HeadingText text="skills" />
      <Divider />
       <div className="flex col gap">
       {data.skills.map((skill, index) => (
            <div key={index} className="skill-item flex col mingap">
              <SubHeading text={skill.title}/>

              <p  className='textcolor'>{skill.content}</p>
            </div>
          ))}
       </div>
        </div>
      
        </div>
       
      </div>
    </div>
  );
}

export default Demores;

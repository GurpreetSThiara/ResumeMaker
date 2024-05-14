// import React, { useState } from 'react';


import React, { useState } from 'react';
import './Resume.css'; // Import your CSS file

const Resume = () => {
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
  });

  return (
    <div className="resume">
      <div className="left-section">
        <div className="header">
          <h1>{data.name}</h1>
          <h2>{data.role}</h2>
          <p>{data.profileDescription}</p>
        </div>
        <div className="contact">
          <h3>Contact:</h3>
          <p><strong>Address:</strong> {data.contact.address}</p>
          <p><strong>Email:</strong> {data.contact.email}</p>
          <p><strong>Phone:</strong> {data.contact.phone}</p>
          <p><strong>LinkedIn:</strong> {data.contact.linkedin}</p>
        </div>
        <div className="skills">
          <h3>Skills:</h3>
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h4>{skill.title}</h4>
              <p>{skill.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="experience">
          <h3>Experience:</h3>
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.role}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;

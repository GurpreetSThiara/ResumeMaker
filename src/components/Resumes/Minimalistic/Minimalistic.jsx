import React from 'react'
import './Minimalistic.css'
import { MdEmail, MdLocationOn, MdPerson, MdPhone } from 'react-icons/md';

const Minimalistic = () => {
    const data = {
        name: "John Doe",
        role: "Software Developer",
        profileDescription:
          "Passionate software developer with a focus on web development. Experienced in building scalable web applications using modern technologies.",
        contact: {
          address: "123 Main Street, City, Country",
          email: "john@example.com",
          phone: "+1234567890",
          linkedin: "linkedin.com/in/johndoe",
        },
        education: [
          {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Example",
            graduationYear: 2018,
          },
        ],
        experience: [
          {
            role: "Software Developer",
            description:
              "Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
          },
          {
            role: "Intern",
            description:
              "Assisted in the development and testing of new features for web applications. Gained hands-on experience with front-end and back-end technologies.",
          },
        ],
        skills: [
          { title: "JavaScript", content: "ES6, React.js, Node.js" },
          { title: "HTML & CSS", content: "Sass, Bootstrap" },
          { title: "Database", content: "MongoDB, MySQL" },
        ],
      };
      

  // ContactItem Component
  const ContactItem = ({ icon, text }) => (
    <div className="contact-item flex gap align-center">
      {icon}
      <p>{text}</p>
    </div>
  );
  const HeadingText = ({ text }) => (
    <h3 className="heading-text">{text}</h3>
  );
  const Divider = () => (
    <hr className="divider" />
  );

  const SubHeading = ({ text }) => (
    <h4 className="subheading">{text}</h4>
  );
  
  
  return (
    <div className="minimalistic-resume">
    <header>
      <h1>John Doe</h1>
      <p>Software Engineer</p>
    </header>
    <section className="contact">
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> john.doe@example.com</li>
        <li><strong>Phone:</strong> (123) 456-7890</li>
        <li><strong>LinkedIn:</strong> linkedin.com/in/johndoe</li>
      </ul>
    </section>
    <section className="experience">
      <h2>Experience</h2>
      <div className="job">
        <h3>Senior Software Engineer</h3>
        <p><strong>ABC Company</strong></p>
        <p>January 2018 - Present</p>
        <ul>
          <li>Developed and maintained backend systems using Node.js and Express</li>
          <li>Designed and implemented RESTful APIs for internal and external use</li>
          <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
        </ul>
      </div>
      {/* Additional job experiences can be added here */}
    </section>
    <section className="education">
      <h2>Education</h2>
      <p><strong>Bachelor of Science in Computer Science</strong></p>
      <p>XYZ University - Graduated May 2017</p>
    </section>
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>HTML5/CSS3</li>
        <li>RESTful APIs</li>
        <li>Git/GitHub</li>
      </ul>
    </section>
  </div>
  )
}

export default Minimalistic

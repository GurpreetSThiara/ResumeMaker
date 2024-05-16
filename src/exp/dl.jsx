import { Center, ChakraProvider, List, ListItem } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useState } from "react";
import ATSBold from "../components/Resumes/ATSBold/ATSBold";
const DL = () => {
    const [usernames, setUsernames] = useState([
        "malerba118",
        "compulves",
        "dan_abramov",
      ]);
      const [data, setData] = useState({
        name: "John Doe",
        role: "Full Stack Developer",
        profileDescription:
          "Results-driven Full Stack Developer with [X years] of experience in designing, developing, and implementing scalable web applications. Proficient in both front-end and back-end technologies, with a strong focus on delivering high-quality code and intuitive user experiences.",
        contact: {
          address: "512 Moore Street, Indigo Valley, California",
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
            from:'xxxx',
            to:'yyyy',
            role: "Front-end Developer at Company X",
            description:
              "Developed user interfaces using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs. Utilized React.js to create interactive and dynamic web applications.",
          },
          {
            from:'xxxx',
            to:'yyyy',
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
            gpa: "3.8/4.0"
          },
          {
            institution: "ABC College",
            degree: "Master of Science in Software Engineering",
            graduationYear: "201Y",
            gpa: "3.8/4.0"
          },
        ],
        projects: [
            {
              title: "AI Chatbot",
              description: "Developed an AI-based chatbot for a capstone project, resulting in a 15% increase in customer satisfaction.",
              technologies: ["Python", "TensorFlow", "NLTK"],
              link: "https://github.com/johndoe/aichatbot"
            },
            {
              title: "E-commerce Platform",
              description: "Designed and implemented a scalable e-commerce platform using MERN stack.",
              technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
              link: "https://github.com/johndoe/ecommerce-platform"
            }
          ],
        custom: [],
        customLeft:[]
      });


  return (
   <div className="">
    <ATSBold data={data}/>
   </div>
  );
};

export default DL
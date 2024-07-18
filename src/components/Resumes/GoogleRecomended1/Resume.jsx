import { useRef, useState } from "react";
import "./gResume.css";
import { Box, Button } from "@chakra-ui/react";
import jsPDF from "jspdf";

function GResume() {
  const [data, setData] = useState({
    name: "John Doe",
    role: "Software Engineer",
    profileDescription:
      "Passionate software engineer with extensive experience in developing scalable web applications and software solutions. Skilled in a variety of programming languages and frameworks, with a strong focus on user-centric design and robust back-end architecture. Proven ability to lead projects and work effectively in team environments.",
    contact: {
      address: "1234 Elm Street, Springfield, IL 62704",
      email: "john.doe@example.com",
      phone: "555-123-4567",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    skills: [
      {
        title: "Programming Languages",
        content: "Python, JavaScript, C++, Java",
        more: [],
      },
      {
        title: "Web Development",
        content: "React.js, Angular, Node.js, Django",
        more: [],
      },
      {
        title: "Database Management",
        content: "PostgreSQL, MySQL, SQLite",
        more: [],
      },
      {
        title: "DevOps",
        content: "AWS, Docker, Jenkins",
        more: [],
      },
    ],
    experience: [
      {
        role: "Software Engineer",
        company: "Tech Solutions Inc., Chicago, IL",
        from: "June 2019",
        to: "Present",
        description:
          "Developed and maintained web applications using React.js and Node.js.",
        more: [
          "Led a team of 5 developers to design and implement a new customer management system.",
          "Improved application performance by optimizing front-end and back-end code.",
          "Integrated third-party APIs to enhance application functionality.",
          "Conducted code reviews and provided mentorship to junior developers.",
          "Implemented continuous integration and deployment pipelines using Jenkins and Docker.",
          "Collaborated with cross-functional teams to define project requirements and deliverables.",
        ],
      },
      {
        role: "Junior Software Developer",
        company: "Web Innovations, Boston, MA",
        from: "August 2017",
        to: "May 2019",
        description:
          "Assisted in the development of e-commerce platforms and content management systems.",
        more: [
          "Developed front-end components using Angular and integrated with RESTful APIs.",
          "Performed database design and optimization for PostgreSQL and MySQL.",
          "Participated in daily stand-up meetings and contributed to sprint planning sessions.",
          "Wrote unit tests and performed debugging to ensure high code quality.",
          "Collaborated with UI/UX designers to create responsive and user-friendly interfaces.",
        ],
      },
    ],
    education: [
      {
        institution: "State University",
        degree: "B.Sc. in Computer Science",
        graduationYear: "2017",
        gpa: "3.6/4.0",
        more: [],
      },
    ],
    projects: [
      {
        title: "Task Management App",
        description:
          "Developed a web-based task management application with real-time collaboration features. Implemented user authentication, task assignment, and progress tracking functionalities.",
        technologies: "React.js, Node.js, MongoDB",
        link: "https://github.com/johndoe/task-manager",
        more: [
          "Real-time collaboration features using WebSocket.",
          "User authentication and authorization.",
          "Task assignment and progress tracking.",
          "Responsive design for mobile and desktop platforms.",
        ],
      },
      {
        title: "Weather Forecasting App",
        description:
          "Created a weather forecasting application that provides real-time weather updates and alerts. Integrated with third-party weather APIs and implemented a user-friendly interface.",
        technologies: "Angular, Express.js, SQLite",
        link: "https://github.com/johndoe/weather-app",
        more: [
          "Integration with third-party weather APIs.",
          "Real-time weather updates and alerts.",
          "User-friendly interface with responsive design.",
          "Data caching and offline access using service workers.",
        ],
      },
    ],
    certifications: [
      {
        title: "Certified Scrum Master (CSM)",
        more: [],
      },
      {
        title: "AWS Certified Solutions Architect",
        more: [],
      },
    ],
    technicalProficiencies: [
      {
        title: "Languages",
        content: "Python, JavaScript, C++, Java",
        more: [],
      },
      {
        title: "Frameworks",
        content: "React.js, Angular, Django, Express.js",
        more: [],
      },
      {
        title: "Databases",
        content: "PostgreSQL, MySQL, SQLite, MongoDB",
        more: [],
      },
      {
        title: "Tools",
        content: "Git, Docker, Jenkins, Kubernetes",
        more: [],
      },
      {
        title: "Cloud Services",
        content: "AWS, Azure, Google Cloud",
        more: [],
      },
    ],
    professionalDevelopment: [
      {
        title: "Courses",
        content:
          "Completed online courses on machine learning and cloud computing.",
        more: [],
      },
      {
        title: "Workshops",
        content:
          "Attended workshops on microservices architecture and serverless computing.",
        more: [],
      },
    ],
    additionalInformation: [
      {
        title: "Relocation and Remote Work",
        content: "Open to relocation and remote work options.",
        more: [],
      },
      {
        title: "Languages",
        content: "Fluent in English and Spanish.",
        more: [],
      },
    ],
    references: [
      {
        title: "References",
        content: "Available upon request.",
        more: [],
      },
    ],
    links: [
      {
        key: "Portfolio",
        value: "https://johndoe-portfolio.com",
        more: [],
      },
      {
        key: "LinkedIn",
        value: "https://www.linkedin.com/in/johndoe",
        more: [],
      },
      {
        key: "GitHub",
        value: "https://github.com/johndoe",
        more: [],
      },
    ],
    custom: [],
    customLeft: [],
  });

  const ref = useRef();
  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(ref.current, {
      callback: (doc) => {
        doc.save('document.pdf');
      },
      margin: [10, 10, 10, 10], // Adjust margins if needed
      html2canvas: {
        scale: 0.745, // Adjust scale based on your needs
        useCORS: true, // Enable this if you have cross-origin images
        letterRendering: true // Enable this to improve text rendering
      }
    });
  };
  return (
  <Box>
    <Button onClick={generatePDF}>
      press
    </Button>
      <div  className="main pdf-container" >
      <div className="resume"  ref={ref} >
        <div className="resume_header_main">
          <div className="resume_header_main_name">{data.name}</div>
          <div className="resume_header_main_job_title">{data.role}</div>
          <div className="resume_header_main_contact">
            {data.contact.address} • {data.contact.phone} • {data.contact.email}{" "}
            • {data.contact.linkedin}
          </div>
        </div>
        <div className="resume_contents">
          <div className="resume_contents_experience">
            <div className="resume_contents_experience_title">EXPERIENCE</div>
            {data.experience.map((item, index) => (
              <div className="resume_contents_experience_item" key={index}>
                <div className="resume_contents_experience_company_and_date">
                  <div className="resume_contents_experience_company_and_date_company_name">
                    {item.company}
                  </div>
                  <div className="resume_contents_experience_company_and_date_company_date">
                    {item.from} - {item.to}
                  </div>
                </div>
                <div className="resume_contents_experience_job_title">
                  {item.role}
                </div>
                <div className="resume_contents_experience_achivements">
                  <ul>
                    <li>{item.description}</li>
                    {item.more.map((moreItem, moreIndex) => (
                      <li key={moreIndex}>{moreItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="resume_contents_education">
            <div className="resume_contents_education_title">EDUCATION</div>
            {data.education.map((item, index) => (
              <div className="resume_contents_education_item" key={index}>
                <div className="resume_contents_education_institute_and_date">
                  <div className="resume_contents_education_institute_and_date_institute_name">
                    {item.institution}
                  </div>
                  <div className="resume_contents_education_institute_and_date_institute_date">
                    {item.graduationYear}
                  </div>
                </div>
                <div className="resume_contents_education_study_title_and_gpa">
                  <div className="resume_contents_education_study_title">
                    {item.degree}
                  </div>
                  <div className="resume_contents_education_gpa">
                    {item.gpa} GPA
                  </div>
                </div>
                <div className="resume_contents_education_achivements">
                  <ul>
                    {item.more.map((moreItem, moreIndex) => (
                      <li key={moreIndex}>{moreItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="resume_contents_projects">
            <div className="resume_contents_projects_title">PROJECTS</div>
            {data.projects.map((item, index) => (
              <div className="resume_contents_projects_item" key={index}>
                <div className="resume_contents_projects_item_title">
                  {item.title}:
                </div>
                <div className="resume_contents_projects_item_description">
                  {item.description}
                </div>
                <div className="resume_contents_projects_item_technologies">
                  Technologies:&nbsp;
                  <span style={{ color: "var(--normal_text_color)" }}>
                    {item.technologies}
                  </span>
                </div>
                <div className="resume_contents_projects_item_link">
                  Link:&nbsp;
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </div>
                <div className="resume_contents_projects_item_achivements">
                  <ul>
                    {item.more.map((moreItem, moreIndex) => (
                      <li key={moreIndex}>{moreItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="resume_contents_skills">
            <div className="resume_contents_skills_title">SKILLS</div>
            {data.skills.map((item, index) => (
              <div className="resume_contents_skills_item" key={index}>
                <div className="resume_contents_skills_item_title_and_content">
                  <div className="resume_contents_skills_item_title">
                    {item.title}:
                  </div>
                  &nbsp;
                  <div className="resume_contents_skills_item_content">
                    {"  " + item.content}
                  </div>
                </div>
                <div className="resume_contents_skills_item_achivements">
                  <ul>
                    {item.more.map((moreItem, moreIndex) => (
                      <li key={moreIndex}>{moreItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="resume_contents_certifications">
            <div className="resume_contents_certifications_title">
              CERTIFICATIONS
            </div>
            {data.certifications.map((item, index) => (
              <div className="resume_contents_certifications_item" key={index}>
                <div className="resume_contents_certifications_item_title">
                  {item.title}
                </div>
                <div className="resume_contents_certifications_item_achivements">
                  <ul>
                    {item.more.map((moreItem, moreIndex) => (
                      <li key={moreIndex}>{moreItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Box>
  );
}

export default GResume;

import React from 'react';
import './DemoRes.css'; // Import the CSS file for styling

const DemoRes = () => {
  return (
    <div className="resume">
    <header>
        <h1>JANHAVI SINGH</h1>
        <p>8858981287 • <a href="mailto:janhavisingh430@gmail.com">janhavisingh430@gmail.com</a> • <a href="https://linkedin.com/in/janhavi-singh-646818222" target="_blank" rel="noopener noreferrer">linkedin.com/in/janhavi-singh-646818222</a> • <a href="https://github.com/sijanhavi" target="_blank" rel="noopener noreferrer">github.com/sijanhavi</a></p>
    </header>

    <section>
        <h2>SUMMARY</h2>
        <p>Highly motivated Computer Science graduate proficient in diverse programming languages/tools, with hands-on software development experience. Seeking Application Developer role to leverage skills and contribute to dynamic teams, adept at tackling complex challenges in the tech industry with passion and excellence.</p>
    </section>

    <section>
        <h2>EDUCATION</h2>
        <div className="education-item">
            <h3>B.Tech, Computer Science and Engineering</h3>
            <p>Graduating July 2023</p>
            <p>AKTU <strong>7.28 GPA</strong></p>
            <p>Shambhunath Institute of Engineering and Technology(SIET), Allahabad</p>
            <p>Relevant coursework: Algorithms, Data Structures, Programming Languages, Software Engineering and Databases</p>
        </div>
    </section>

    <section>
        <h2>TECHNICAL SKILLS</h2>
        <p><strong>Languages:</strong> Java, C, Python, SQL</p>
        <p><strong>Web Development and Database:</strong> HTML, CSS, Javascript, Bootstrap, Angular, MySql</p>
        <p><strong>Development Tools:</strong> VS Code, Eclipse, GitHub, Figma</p>
        <p><strong>Core Fundamentals:</strong> OOPs Concept, Data Structure and Algorithm, Database, Software Engineering</p>
        <p><strong>Soft Skills:</strong> Communication, Problem-solving, Time management, Teamwork, Adaptability</p>
    </section>

    <section>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="experience-item">
            <h3>Anudip Foundation, WFH: Full Stack Development Intern</h3>
            <p>July 2023 – Jan 2024</p>
            <ul>
                <li>Developed and deployed dynamic web applications, seamlessly integrating front-end and back-end functionalities, resulting in improved user experience and increased customer engagement.</li>
                <li>Assisted in troubleshooting and resolving technical issues, ensuring smooth functionality and user experience across various platforms and devices.</li>
                <li>Participated in code reviews, pair programming sessions, and knowledge-sharing activities to enhance team productivity and foster skill development in software development practices.</li>
                <li>Collaborated on full-stack development projects, leveraging languages such as Java, MySQL, HTML, CSS, JavaScript, and frameworks like Bootstrap and Angular, to deliver robust and responsive web applications.</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>ACADEMIC PROJECTS</h2>
        <div className="project-item">
            <h3>Prediction of Air Quality Index</h3>
            <p>Dec 2022 – Feb 2023</p>
            <ul>
                <li>Collaborated in a team of three to predict air quality index accurately.</li>
                <li>Developed team schedule, including quality measurement for each major milestone.</li>
                <li>Utilized Python for implementing a machine learning algorithm to forecast air quality index, showcasing proficiency in data analysis and predictive modeling.</li>
                <li>Recognized by faculty audience as “Best Presentation” out of 15 teams.</li>
            </ul>
        </div>
        <div className="project-item">
            <h3>Number Guessing Game</h3>
            <p>May 2022</p>
            <ul>
                <li>Led a team of three to design and develop a number guessing game.</li>
                <li>Designed and implemented a number guessing game using AWT in Java, demonstrating knowledge in GUI development and Java programming.</li>
                <li>Collaborated with team members to ensure smooth functionality and user-friendly interface design.</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>ACTIVITIES</h2>
        <div className="activities-item">
            <h3>Developer Job Simulation (Accenture)</h3>
            <p>Nov 2023 – Nov 2023</p>
            <p>Successfully navigated through a virtual developer job simulation, showcasing problem-solving abilities and adaptability in a simulated real-world development scenario.</p>
        </div>
        <div className="activities-item">
            <h3>Member of Computer Society of India (CSI)</h3>
            <p>Oct 2019 – Jan 2023</p>
            <p>Led the organization of 10+ dynamic coding events as a member of CSI, fostering innovation and collaboration within the tech community; drove impactful initiatives that shaped the future of technology and attracted 100+ attendees per event.</p>
        </div>
    </section>
</div>
//     <div className="resume">
//     <header>
//         <h1>FIRST LAST</h1>
//         <p>xyz@email.com | 1234567890 | 123 XYZ Street, Bangalore, IN</p>
//         <p>HackerRank | GitHub | LinkedIn | Twitter | Portfolio</p>
//     </header>

//     <section className="education">
//         <h2>Education</h2>
//         <div className="education-item">
//             <h3>XYZ University</h3>
//             <p>B.Tech Computer Science <strong>GPA: 9.1</strong></p>
//             <p>June 2015 - July 2019</p>
//         </div>
//         <div className="education-item">
//             <h3>XYZ School</h3>
//             <p>Higher Secondary Physics, Chemistry & Maths <strong>GPA: 8.8</strong></p>
//             <p>March 2013 - May 2015</p>
//         </div>
//     </section>

//     <section className="experience">
//         <h2>Experience</h2>
//         <div className="experience-item">
//             <h3>HackerRank | Software Engineer 2</h3>
//             <p>Bengaluru, India | Jan 21 - Present</p>
//             <ul>
//                 <li>Write a one- or two-paragraph explanation of what the project aims to accomplish.</li>
//                 <li>Avoid delving deep into background or past projects.</li>
//                 <li>A good project summary will not only serve as your elevator speech, but will also help you clarify larger issues with your plan.</li>
//             </ul>
//         </div>
//         <div className="experience-item">
//             <h3>Amazon | SDE 1</h3>
//             <p>Bangalore, IN | March 2020 - December 2020</p>
//             <ul>
//                 <li>Write a one- or two-paragraph explanation of what the project aims to accomplish.</li>
//                 <li>Avoid delving deep into background or past projects.</li>
//                 <li>A good project summary will not only serve as your elevator speech, but will also help you clarify larger issues with your plan.</li>
//             </ul>
//         </div>
//         <div className="experience-item">
//             <h3>Microsoft | Software Engineer</h3>
//             <p>Delhi, IN | August 2019 - February 2020</p>
//             <ul>
//                 <li>Write a one- or two-paragraph explanation of what the project aims to accomplish.</li>
//                 <li>Avoid delving deep into background or past projects.</li>
//                 <li>A good project summary will not only serve as your elevator speech, but will also help you clarify larger issues with your plan.</li>
//             </ul>
//         </div>
//     </section>

//     <section className="skills">
//         <h2>Skills</h2>
//         <p>Programming Languages: C/C++, Java, HTML/CSS, JavaScript, Python, SQL</p>
//         <p>Libraries/Frameworks: Reactjs, Vuejs, Redux, Expressjs</p>
//         <p>Tools/Platforms: Git/Github, VSCode, Github Actions, Docker</p>
//         <p>Databases: MongoDB, PostgreSQL</p>
//     </section>

//     <section className="projects">
//         <h2>Projects / Open-Source</h2>
//         <div className="project-item">
//             <h3>Project 1 | Link</h3>
//             <p>JavaScript, HTML, CSS</p>
//             <p>Write a one- or two-paragraph explanation of what the project aims to accomplish.</p>
//         </div>
//         <div className="project-item">
//             <h3>Project 2 | Link</h3>
//             <p>Reactjs, Expressjs, Nodejs, MongoDB</p>
//             <p>Write a one- or two-paragraph explanation of what the project aims to accomplish.</p>
//         </div>
//         <div className="project-item">
//             <h3>Project 3 | Link</h3>
//             <p>Java, Distributed Systems, Computer Networks, MongoDB</p>
//             <p>Write a one- or two-paragraph explanation of what the project aims to accomplish.</p>
//         </div>
//         <div className="project-item">
//             <h3>Project 4 | Link</h3>
//             <p>Java, PHP, MySQL, Reactjs, TypeScript</p>
//             <p>Write a one- or two-paragraph explanation of what the project aims to accomplish.</p>
//         </div>
//     </section>

//     <section className="honors-awards">
//         <h2>Honors & Awards</h2>
//         <p>Distinction, honor, or honorable mention for which you won't usually receive a physical object or award—just the title</p>
//     </section>
// </div>
  );
};

export default DemoRes;

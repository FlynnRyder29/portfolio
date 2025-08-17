import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const WorkExperience = () => {
  const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "BI Hub Solution",
    period: "May 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Built a custom ETL tool combining features of Informatica and Daiku, enabling creation of multiple data flows with transformations and GenAI integration.",
      "Developed REST APIs for domain updates, anomaly table creation, and metadata extraction, with Redis caching for optimized chatbot integration.",
      "Implemented Power BI embedding (5+ dashboards) with slicers, parameter management, dataset integration, export features, infinite scrolling, and advanced filters."
    ],
    technologies: ["FastAPI", "Python", "React.js", "Redis", "Power BI"]
  },
  {
    title: "Software Engineer Intern",
    company: "Ventura Securities",
    period: "Feb 2024 - Aug 2024",
    location: "Mumbai Metropolitan Region · On-site",
    description: [
      "Developed and deployed a production-grade Admin Dashboard on AWS Amplify (React.js) with API Gateway, Lambda, and DynamoDB for serverless logic and storage supporting 1000+ users.",
      "Enhanced reliability by validating data consistency across APIs, databases, Redis caches, and S3, ensuring accurate real-time analytics in Metabase.",
      "Automated end-to-end data quality checks for mutual fund and IPO pipelines using Python, SQLAlchemy, and PostgreSQL across 5+ financial datasets."
    ],
    technologies: ["React.js", "AWS Amplify", "Lambda", "DynamoDB", "PostgreSQL", "Redis", "Metabase"]
  },
  {
    title: "Salesforce Developer Intern",
    company: "Salesforce",
    period: "May 2023 - Jul 2023",
    location: "Remote",
    description: [
      "Completed 8-week Salesforce development internship covering Organizational Setup, Process Automation, Apex Development, and Lightning Web Components (LWC).",
      "Built and debugged scalable solutions using Salesforce CLI, VS Code, and APIs.",
      "Earned 3 Superbadges: Apex Specialist, Process Automation Specialist, and Developer Super Set."
    ],
    technologies: ["Salesforce", "Apex", "LWC", "Salesforce CLI", "APIs"]
  },
  {
    title: "Cloud Developer Intern",
    company: "Celebal Technologies",
    period: "Apr 2023 - Jul 2023",
    location: "Jaipur, Rajasthan, India · On-site",
    description: [
      "Strengthened cloud development skills with JavaScript, Git, and React.js while gaining practical exposure to Azure fundamentals.",
      "Engineered 'Ikigai', an e-commerce website integrating Django (backend) and React.js (frontend)."
    ],
    technologies: ["React.js", "Django", "Azure", "JavaScript", "Git"]
  }
];


  return (
    <section className="work-experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Work Experience</h2>
                  <p>My professional journey and the experiences that have shaped my career in software development.</p>
                  
                  <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                      <div key={index} className={`experience-item ${isVisible ? "animate__animated animate__slideInUp" : ""}`} style={{animationDelay: `${index * 0.2}s`}}>
                        <div className="experience-content">
                          <div className="experience-header">
                            <h3>{exp.title}</h3>
                            <div className="company-info">
                              <h4>{exp.company}</h4>
                              <span className="location">{exp.location}</span>
                            </div>
                            <span className="period">{exp.period}</span>
                          </div>
                          
                          <div className="experience-description">
                            <ul>
                              {exp.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="experience-technologies">
                            <h5>Technologies Used:</h5>
                            <div className="tech-tags">
                              {exp.technologies.map((tech, techIdx) => (
                                <span key={techIdx} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {index < experiences.length - 1 && <div className="timeline-connector"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

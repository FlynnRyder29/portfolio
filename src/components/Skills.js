import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Apex", level: 75 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 82 },
        { name: "HTML/CSS", level: 90 },
        { name: "FastAPI", level: 80 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 88 },
        { name: "Redis", level: 75 },
        { name: "DynamoDB", level: 70 }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "Salesforce", level: 80 },
        { name: "JIRA", level: 75 },
        { name: "Figma", level: 70 }
      ]
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "SQLAlchemy", level: 82 },
        { name: "Metabase", level: 75 }
      ]
    }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx">
                    <h2>Technical Skills</h2>
                    <p>A comprehensive overview of my technical expertise across various domains of software development, cloud technologies, and data analytics.</p>
                    
                    <div className="skills-grid">
                      {skillCategories.map((category, categoryIndex) => (
                        <div 
                          key={categoryIndex} 
                          className={`skill-category ${isVisible ? "animate__animated animate__slideInUp" : ""}`}
                          style={{animationDelay: `${categoryIndex * 0.1}s`}}
                        >
                          <h3 className="category-title">{category.category}</h3>
                          <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="skill-item">
                                <div className="skill-info">
                                  <span className="skill-name">{skill.name}</span>
                                  <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                  <div 
                                    className="skill-progress"
                                    style={{
                                      width: `${skill.level}%`,
                                      transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                                    }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
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
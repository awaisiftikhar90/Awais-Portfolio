import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Project Manager</h4>
                <h5>Yourway Company</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Translated operational requirements into system workflows, process documentation, and functional specifications.
              Managed project deliverables and analyzed datasets to produce dashboards and decision-support reports for leadership.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>CareCloud (MTBC)</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Designed and launched an internal employee portal using Java, Spring Boot, Angular, and MySQL.
              Architected RESTful APIs and delivered enterprise-level features end-to-end in Agile sprints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MS in Information Studies</h4>
                <h5>Trine University</h5>
              </div>
              <h3>Expected 2026</h3>
            </div>
            <p>
              Relevant Courses: Cloud Computing, Advanced Database, Project Management, Data Science & Big Data,
              Cybersecurity, Network Management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Computer Science</h4>
                <h5>National University of Modern Languages</h5>
              </div>
              <h3>Graduated</h3>
            </div>
            <p>
              Focus on software development, data structures, databases, and Object-Oriented Programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import "./resume.css";

// Set the correct worker script URL for version 3.11.174
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`; // Remote setup

const ResumePreview = () => {
  // Static URL of the PDF you want to preview (change to your actual URL)
  const pdfUrl = "/path/to/your/resume.pdf"; // or URL: "https://example.com/path/to/your/resume.pdf"

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="name">Misganaw Mekashaw Tegegne</h1>
        <p className="title">Full Stack Developer | System Analyst | Data Analyst</p>
        <div className="contact-info">
          <p>Email: misganawcbcd21@gmail.com | Phone: 0919352801</p>
          <p>GitHub: <a href="https://github.com/BirthMark21" target="_blank" rel="noopener noreferrer">github.com/BirthMark21</a></p>
          <p>Location: Addis Ababa, Ethiopia</p>
        </div>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Results-driven Computer Science and Engineering graduate with expertise in software development, 
          system administration, and data analysis. Skilled in backend and frontend development, 
          software quality assurance, and project management. Passionate about innovation and efficiency, 
          seeking to contribute technical and managerial skills in a dynamic working environment.
        </p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <table className="skills-table">
          <thead>
            <tr>
              <th>Technical Skills</th>
              <th>Soft Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li><strong>Backend Development:</strong> Python (Django), Java (Spring), Odoo Development</li>
                  <li><strong>Frontend Development:</strong> React, HTML, CSS, JavaScript</li>
                  <li><strong>Database Management:</strong> MySQL, PostgreSQL, MS SQL Server</li>
                  <li><strong>Data Analysis:</strong> MS Power BI, Pandas, Oracle BI, Data Mining, ETL Tools</li>
                  <li><strong>System & Server Administration</strong></li>
                  <li><strong>Software Quality Assurance & Testing:</strong> (Manual & Automation)</li>
                  <li><strong>RESTful API Development</strong></li>
                  <li><strong>Requirement Engineering:</strong> (SRS Documents)</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Project Management</li>
                  <li>Task Prioritization</li>
                  <li>Problem-Solving</li>
                  <li>Teamwork & Collaboration</li>
                  <li>Time Management</li>
                  <li>Effective Communication</li>
                  <li>Adaptability & Flexibility</li>
                  <li>Critical & Analytical Thinking</li>
                  <li>Negotiation & Conflict Resolution</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="resume-section">
        <h2>Professional Experience</h2>
        <div className="job">
          <h3>System Business Analyst, Data Analyst & IT Support Officer</h3>
          <p className="company">Addis Home Finder PLC | September 2024 – Present</p>
          <ul>
            <li>Conduct business analysis to identify system requirements and optimize workflows.</li>
            <li>Perform data analysis to generate insights for decision-making and business growth.</li>
            <li>Provide IT support, troubleshooting hardware, software, and network issues.</li>
            <li>Manage IT infrastructure, ensuring system security, scalability, and efficiency.</li>
            <li>Oversee implementation of new technologies to enhance business operations.</li>
            <li>Collaborate with cross-functional teams to align IT solutions with business objectives.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Machine Learning Algorithm Implementor (Remote)</h3>
          <p className="company">ICOG LAB</p>
          <ul>
            <li>Developed and implemented machine learning algorithms for data analysis and automation.</li>
            <li>Worked on Hidden Feature Extractor and Online Analytical Processing (OLAP).</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Science in Computer Science & Engineering</strong>
          <br />
          Adama Science and Technology University | Graduated July 2024 | CGPA: 3.39
        </p>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          <li>Dereja Academy Accelerated Program (Soft Skills & Accounting & Finance)</li>
          <li>Introduction to Machine Learning - Coursera</li>
          <li>Introduction to Advanced Data Analysis - Coursera</li>
        </ul>
      </section>

      {/* PDF Viewer - Static PDF */}
      <section className="pdf-viewer">
        <h2>Resume Preview</h2>
        <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Misganaw Mekashaw Tegegne | All Rights Reserved</p>
        <p>
          <a href="https://cbcdcommunity.com" target="_blank" rel="noopener noreferrer">
            CBCD Community 2025
          </a> | 
          <a href="https://github.com/BirthMark21" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a> | 
          <a href="mailto:misganawcbcd21@gmail.com" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ResumePreview;

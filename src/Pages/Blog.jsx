import React from "react";
import "./BlogPost.css";

const references = [
  {
    name: "Dr. Tiruveedula Gopikrishna",
    title: "Ph.D Associate Professor",
    email: "tiruveedula.gopi@astu.edu.et",
    phone: "+251904433041",
    details: "20 years in research and Teaching Dept of Computer Science and Engineering at ASTU. Taught Data Mining, Software Quality Assurance, and AI."
  },
  {
    name: "Dr. Nune Sreenivas",
    title: "Associate Professor in ASTU",
    email: "nune.sreenivas@astu.edu.et",
    phone: "+251926792898",
    details: "Expert in Accounting and Finance. Taught Data Mining, Software Quality Assurance, and AI."
  }
];

const ReferencePage = () => {
  return (
    <div className="reference-container">
      <h1 className="title">References</h1>
      <div className="reference-list">
        {references.map((ref, index) => (
          <div key={index} className="reference-card">
            <h2 className="reference-name">{ref.name}</h2>
            <p className="reference-title"><strong>{ref.title}</strong></p>
            <p className="reference-contact">Email: <a href={`mailto:${ref.email}`} className="email-link">{ref.email}</a></p>
            <p className="reference-contact">Phone: {ref.phone}</p>
            <p className="reference-details">{ref.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferencePage;

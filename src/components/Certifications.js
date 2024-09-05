import React from "react";
import "../styles/Certifications.css"; // Ensure this CSS file is correctly imported

const certifications = [
  {
    title: "Agile Development Practices",
    issuer: "LinkedIn",
    date: "Oct 2023",
    link: "https://www.linkedin.com/learning/certificates/6691951a3ba77909356e6868183aaec6095d8a5bdb4b95949fbc70269b820af6",
    thumbnail: `${process.env.PUBLIC_URL}/linkedin.jpeg`,
  },
  {
    title: "Building Monorepos on GitHub",
    issuer: "LinkedIn",
    date: "Oct 2023",
    link: "https://www.linkedin.com/learning/certificates/935508be756cc179bd0969b9afe3b466d8286208c748edb5ff5c9ff496cd57f7",
    thumbnail: `${process.env.PUBLIC_URL}/linkedin.jpeg`,
  },
  {
    title: "Essential New Skills in Software Engineering",
    issuer: "LinkedIn",
    date: "Oct 2023",
    link: "https://www.linkedin.com/learning/certificates/7d32aff99afab94cec5b46b19bc3a8752a4e1351ac79a27e04810afdb7263b56",
    thumbnail: `${process.env.PUBLIC_URL}/linkedin.jpeg`,
  },
  {
    title: "GitHub Dependabot: Dependency Updates",
    issuer: "LinkedIn",
    date: "Oct 2023",
    link: "https://www.linkedin.com/learning/certificates/a69b3c77faa81779061b0ee032c054f5e035b2245cc35fc98f54266f0854f52f",
    thumbnail: `${process.env.PUBLIC_URL}/linkedin.jpeg`,
  },

  {
    title: "Software Design: From Requirements to Release",
    issuer: "LinkedIn",
    date: "Oct 2023",
    link: "https://www.linkedin.com/learning/certificates/4ec418b521ace698c28fb8e2a13cfb312535e225253817663285a9b81bc47420",
    thumbnail: `${process.env.PUBLIC_URL}/linkedin.jpeg`,
  },
  {
    title: "Foundations of Project Management",
    issuer: "Grow with Google on Coursera",
    date: "March 2023",
    link: "https://coursera.org/share/520e6ecdbb94611df9b362f3abd66106",
    thumbnail: `${process.env.PUBLIC_URL}/google.jpeg`,
  },
  {
    title: "Front-end Web Development with React",
    issuer: "Coursera",
    date: "November 2020",
    link: "https://coursera.org/share/84a3ea7e7ff5d9e9a5d7bfa08dc22ca6",
    thumbnail: `${process.env.PUBLIC_URL}/coursera.jpeg`,
  },
  {
    title: "Career Service Professional Eligibility",
    issuer: "Civil Service Commission",
    date: "April 2016",
    link: "https://www.thesummitexpress.com/2016/05/region-5-passers-civil-service-exam-cse-ppt-results-april-2016.html",
    thumbnail: `${process.env.PUBLIC_URL}/csc.jpeg`,
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-columns">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="certification-content">
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
                <strong>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certification
                  </a>
                </strong>
              </div>
              <img
                src={cert.thumbnail}
                alt={`${cert.title} thumbnail`}
                className="cert-thumbnail"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

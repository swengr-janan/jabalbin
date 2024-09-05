import React from "react";
import "../styles/Bilingual.css"; // Create this CSS file for styling

const Bilingual = () => {
  return (
    <div className="bilingual-section">
      <h2>Language Proficiency & Certifications</h2>
      <div className="bilingual-columns">
        <div className="bilingual-column">
          <h3>PTE Academic (Superior English)</h3>
          <iframe
            src={`${process.env.PUBLIC_URL}/pte.pdf`}
            width="100%"
            height="500px"
            title="PTE Academic"
          ></iframe>
        </div>
        <div className="bilingual-column">
          <h3>Japanese Language Proficiency Test N4</h3>
          <iframe
            src={`${process.env.PUBLIC_URL}/jlpt.pdf`}
            width="100%"
            height="500px"
            title="JLPT N4"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Bilingual;

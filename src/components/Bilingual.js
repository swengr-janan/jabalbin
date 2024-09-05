import React from "react";
import "../styles/Bilingual.css"; // Create this CSS file for styling

const Bilingual = () => {
  return (
    <div className="bilingual-section">
      <h2>Language Proficiency</h2>
      <div className="bilingual-columns">
        <div className="bilingual-column">
          <h3>PTE Academic (Superior English)</h3>
          <img
            src={`${process.env.PUBLIC_URL}/pte.jpg`}
            alt="PTE Academic"
            width="100%"
            height="500px"
          />
        </div>
        <div className="bilingual-column">
          <h3>Japanese Language Proficiency Test N4</h3>
          <img
            src={`${process.env.PUBLIC_URL}/jlpt.jpg`}
            alt="JLPT N4"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default Bilingual;

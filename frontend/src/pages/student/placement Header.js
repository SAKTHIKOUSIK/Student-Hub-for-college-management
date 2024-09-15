import React from "react";
const Header=()=>{
    return(
        <div className="App">

      {/* Heading for Aptitude Practice */}
      <h1>Practice Aptitude Using Aptitude Sheet</h1>

      {/* Aptitude Sheet Card */}
      <div className="card">
        <a href="https://docs.google.com/document/d/162Ag4eFzey9pT31jPKv1Nz3U3bhz6LK4Ihzx9CFTWZk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <h2>Aptitude Sheet</h2>
          <p>Improve your aptitude with a comprehensive sheet of problems designed to sharpen your analytical skills.</p>
        </a>
      </div>

      {/* Heading for Coding Practice */}
      <h1>Practice Coding Using Coding Sheet</h1>

      {/* Coding Sheet Card */}
      <div className="card">
        <a href="https://docs.google.com/spreadsheets/d/1h_Wv-4pGa62hI7YIkVGWY5NlJAvh7xqe/edit?usp=sharing&ouid=106669104952511032299&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
          <h2>Coding Sheet</h2>
          <p>Click here to view and practice using the coding sheet. Enhance your coding skills with curated exercises.</p>
        </a>
      </div>

      

      {/* Footer */}
      <footer>
        <p>Good luck with your coding and aptitude practice!</p>
      </footer>
    </div>
    );
};
export default Header;

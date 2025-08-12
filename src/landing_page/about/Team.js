import React from 'react';
function Team() {
    return ( 
     
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">Our Team</h1>
        <h5 className="text-center text-muted">Meet the minds behind InvestoX</h5>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Founder Section */}
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/mayur_burale.png" 
            alt="Mayur Burale"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Mayur Burale</h4>
          <h6>Founder & CEO, InvestoX</h6>
        </div>

        {/* About Section */}
        <div className="col-6 p-3">
          <p>
            Mayur founded <strong>InvestoX</strong> to simplify trading and investing
            for everyone. With expertise in financial markets and technology, he
            aims to build a platform that empowers users with advanced tools and
            a seamless experience.
          </p>
          <p>
            Passionate about stock markets, Mayur brings innovation and
            transparency to the trading ecosystem.
          </p>
          <p>Coding and building smart financial solutions is his zen.</p>
          <p>
            Connect with Mayur on{" "}
            <a href="http://localhost:3000"  style={{ textDecoration: "none" }}  target="_blank" rel="noopener noreferrer">
              Homepage
            </a>{" "}
            /{" "}
            <a href="https://www.linkedin.com/in/mayur-burale-949096258"   style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="https://github.com/mayurburale2004"  style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
     
}

export default Team;
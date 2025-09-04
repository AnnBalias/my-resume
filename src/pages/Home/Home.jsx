import React from "react";
import homeData from "../../data/home.json";
import homePageImage from "../../assets/images/home-page-img.png";
import "./Home.css";

const Home = () => {
  const { welcome, highlights, about } = homeData;

  return (
    <div className="home-page">
      <div className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>{welcome.title}</h1>
            <p className="intro-text">{welcome.introText}</p>
            <p className="description">{welcome.description}</p>
          </div>
          <div className="welcome-image">
            <img
              src={homePageImage}
              alt="Welcome to my portfolio"
              className="home-page-img"
            />
          </div>
        </div>
      </div>

      <div className="highlights">
        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <h3>
                {highlight.icon} {highlight.title}
              </h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>{about.title}</h2>
        <p>{about.content}</p>
      </div>
    </div>
  );
};

export default Home;

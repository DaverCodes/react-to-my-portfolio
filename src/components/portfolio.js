import React from 'react';

function Portfolio() {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-container">
          <Project title="Javascript" image="path/to/image1.jpg" deployed="https://deployed-app-url.com"/>
          <Project title="Group project" image="path/to/image2.jpg" deployed="https://deployed-app-url.com"/>
          <Project title="Project 3" image="path/to/image3.jpg" deployed="https://deployed-app-url.com"/>
          <Project title="Project 4" image="path/to/image4.jpg" deployed="https://deployed-app-url.com"/>
        </div>
      </section>
    );
}

function Project(props) {
    return (
      <div className="project">
        <img src={props.image} alt={props.title} />
        <div className="project-links">
          <a href={props.github}>GitHub Repo</a>
          <a href={props.deployed}>Deployed App</a>
        </div>
      </div>
    );
  }

export default Portfolio;

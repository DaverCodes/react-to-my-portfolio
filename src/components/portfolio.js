import React from 'react';

function Portfolio() {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-container">
          <Project title="OOP: SVG Generator" image="path/to/image1.jpg" deployed="https://github.com/DaverCodes/Super-Very-Good-Image-Maker"/>
          <Project title="NoSQL: Social Network API" image="path/to/image2.jpg" deployed="https://github.com/DaverCodes/myspace2"/>
          <Project title="Node.js:README Generator " image="path/to/image3.jpg" deployed="https://github.com/DaverCodes/EasyBakeReadMe"/>
          <Project title="Interactive Front-End Group Project" image="path/to/image4.jpg" deployed="https://kshakely5280.github.io/project_one/"/>
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

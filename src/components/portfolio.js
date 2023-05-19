import React from 'react';

function Portfolio() {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-container">
          <Project title="OOP: SVG Generator" image="./svgMakerPic.png" deployed="https://github.com/DaverCodes/Super-Very-Good-Image-Maker"/>
          <Project title="NoSQL: Social Network API" image="./NoSQL.png" deployed="https://github.com/DaverCodes/myspace2"/>
          <Project title="Node.js:README Generator " image="./READMEGEN.png" deployed="https://github.com/DaverCodes/EasyBakeReadMe"/>
          <Project title="Interactive Front-End Group Project" image="./project1.png" deployed="https://kshakely5280.github.io/project_one/"/>
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
        <a href={props.deployed} className="deployed">Deployed App</a>
      </div>
    </div>
  );
}


export default Portfolio;

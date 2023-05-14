import React from 'react';

function Portfolio() {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-container">
          <Project title="Project 1" image="path/to/image1.jpg" deployed="https://deployed-app-url.com"/>
          <Project title="Project 2" image="path/to/image2.jpg" deployed="https://deployed-app-url.com"/>
          <Project title="Project 3" image="path/to/image3.jpg" deployed="https://deployed-app-url.com"/>
          <Project title="Project 4" image="path/to/image4.jpg" deployed="https://deployed-app-url.com"/>
        </div>
      </section>
    );
}

export default Portfolio;

import React from "react";

function Resume() {
  const url = "https://docs.google.com/document/d/1kEdP4fY9lt8w0ULT5dhBIXIZKvl1htF8fNUwOfcHx3g/edit?usp=sharing";

  return (
    <div>
      <iframe src={url} title="Resume" width="100%" height="600"></iframe>
    </div>
  );
}

export default Resume;

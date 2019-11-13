import React from "react";

function MainContent() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const hours = date.getHours() % 12;
  let timeOfDay;
  const styles = {
    color: "#D90000"
  };

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours > 12 && hours < 20) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return (
    <main>
      <h2 style={styles}>Good {timeOfDay}</h2>
      <h4>Its {time} o'clock</h4>
    </main>
  );
}

export default MainContent;

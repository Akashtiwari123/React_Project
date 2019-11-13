import React from "react";

function Contacts(props) {
  // console.log(props);

  return (
    <div>
      <img src={props.imgURL} alt="Characters" />
      <h3>{props.name}</h3>
      <p style={{ display: props.phone ? "block" : "none" }}>
        Phone: {props.phone}
      </p>
      <p style={{ display: !props.email && "none" }}>Email: {props.email}</p>
      <hr />
    </div>
  );
}

export default Contacts;

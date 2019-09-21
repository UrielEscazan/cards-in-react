import React from "react";

function Titulo(props) {
  return (
    <React.Fragment>
    {console.log("Estas son las props:", props)}
    <h2> {props.name}</h2>
    </React.Fragment>
  )

}

export default Titulo;

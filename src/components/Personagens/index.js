import React from "react";

import * as s from "./styles";

export default function Personagens(props) {
  
  return (
    <s.Card>
      <s.Title eyecolor={props.color} >{props.name}</s.Title>
      
    </s.Card>
  );
}

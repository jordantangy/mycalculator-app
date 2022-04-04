import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [num, setNum] = useState(props.value);

  const btnHandler = () => {
    setNum(props.value);
    const objNum = {
      number: num,
    };
    props.numHandler(objNum);
  };

  return (
    <div>
      <button style={props.style} className="round-button" onClick={btnHandler}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;

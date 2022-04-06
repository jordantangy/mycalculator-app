import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [num, setNum] = useState(props.value);

  const btnHandler = () => {
    setNum(props.value);
    const objNum = {
      number: num,
    };
    props.exprHandler(objNum);
  };

  // const powbtnHandler = () => {
  //   const powObj = {
  //     numb: num,
  //   };
  //   props.powhand(powObj);
  // };

  return (
    <div>
      <button
        style={props.style}
        className={
          props.value !== "÷" && props.value !== "√"
            ? "round-button"
            : "top_buttons"
        }
        onClick={btnHandler}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;

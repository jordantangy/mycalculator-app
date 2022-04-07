import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

let pwrPressed = 0;

const Calculator = (props) => {
  const [out, setout] = useState(""); //value to display on the screen
  const [expr, setExpr] = useState(""); //arithmetic expr as string
  const [result, setResult] = useState(0);
  const [onOff, setonOff] = useState(false);

  const sqr2Handler = () => {
    setExpr("Math.pow(" + expr + ",2)");
  };

  const onTypeHandler = (obj) => {
    if (onOff) {
      if (
        obj.number !== "+" &&
        obj.number !== "-" &&
        obj.number !== "x" &&
        obj.number !== "÷" &&
        obj.number !== "√"
      ) {
        setout(out + obj.number);
        setExpr(expr + obj.number);
      } else {
        if (obj.number === "x") {
          setExpr(expr + "*");
        } else if (obj.number === "÷") {
          setExpr(expr + "/");
        } else if (obj.number === "√") {
          setExpr("Math.sqrt(" + expr + ")");
        } else {
          setExpr(expr + obj.number);
        }
        setout("");
      }
    } else {
      return;
    }
  };

  const powerOn = () => {
    setonOff(true);
    setout("0");
  };
  const powerOff = () => {
    setonOff(false);
    setout("");
  };

  const eqHandler = () => {
    setout(out + "=");
    setExpr("(" + expr + ")"); // add paranthesis when "=" is clicked
    setResult(eval(expr));
  };

  const cHandler = () => {
    setout("");
    setExpr("");
    setResult(0);
  };

  return (
    <div id="calculator-wrapper">
      <Screen val={out} res={result} exp={expr}></Screen>
      <Button
        value={0}
        style={{ left: 10, top: 330 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={1}
        style={{ left: 10, top: 160 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={2}
        style={{ left: 110, top: 80 }}
        exprHandler={onTypeHandler}
        //powhand={test}
        //pressed={pressed}
      />
      <Button
        value={3}
        style={{ left: 210, top: 0 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={4}
        style={{ left: 10, top: -170 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={5}
        style={{ left: 110, top: -250 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={6}
        style={{ left: 210, top: -330 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={7}
        style={{ left: 10, top: -500 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={8}
        style={{ left: 110, top: -580 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={9}
        style={{ left: 210, top: -660 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"x"}
        style={{ left: 310, top: -740, backgroundColor: "purple" }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"-"}
        style={{ left: 310, top: -730, backgroundColor: "purple" }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"+"}
        style={{ left: 310, top: -720, backgroundColor: "purple" }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"="}
        style={{ left: 310, top: -710, backgroundColor: "purple" }}
        exprHandler={eqHandler}
      />
      <Button
        value={"."}
        style={{ left: 210, top: -790 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value="C"
        style={{ left: 110, top: -870, backgroundColor: "red" }}
        exprHandler={cHandler}
      />
      <Button
        value="÷"
        style={{ left: 310, top: -1265, backgroundColor: "orange" }}
        exprHandler={onTypeHandler}
      />
      <Button
        value="√"
        style={{ left: 210, top: -1305, backgroundColor: "orange" }}
        exprHandler={onTypeHandler}
      />
      <button
        className="top_buttons"
        style={{ left: 110, top: -1345, backgroundColor: "orange" }}
        onClick={sqr2Handler}
      >
        x<sup>2</sup>
      </button>
      <button
        className="on_off"
        style={{ left: -70, top: -1355, backgroundColor: "orange" }}
        onClick={onOff === false ? powerOn : powerOff}
      >
        ON/OFF
      </button>
    </div>
  );
};

export default Calculator;

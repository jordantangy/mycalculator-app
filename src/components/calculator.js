import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = (props) => {
  const [out, setout] = useState("");
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState(0);

  const onTypeHandler = (obj) => {
    if (obj.number !== "+" && obj.number !== "-" && obj.number !== "x") {
      setout(out + obj.number);
      setExpr(expr + obj.number);
    } else {
      if (obj.number === "x") {
        setExpr(expr + "*");
      } else {
        setExpr(expr + obj.number);
      }
      setout("");
    }
  };

  const eqHandler = () => {
    setout(out + "=");
    setResult(eval(expr));
  };

  const cHandler = () => {
    setout(0);
    setExpr("");
    setResult(0);
  };

  return (
    <div id="calculator-wrapper">
      <Screen val={out} res={result}></Screen>
      <Button
        value={0}
        style={{ left: 580, bottom: 140 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={1}
        style={{ left: 580, top: 400 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={2}
        style={{ left: 680, top: 400 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={3}
        style={{ left: 780, top: 400 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={4}
        style={{ left: 580, bottom: 330 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={5}
        style={{ left: 680, bottom: 330 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={6}
        style={{ left: 780, bottom: 330 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={7}
        style={{ left: 580, bottom: 420 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={8}
        style={{ left: 680, bottom: 420 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={9}
        style={{ left: 780, bottom: 420 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"x"}
        style={{ left: 880, bottom: 420 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"-"}
        style={{ left: 880, bottom: 330 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"+"}
        style={{ left: 880, bottom: 235 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"="}
        style={{ left: 880, bottom: 140 }}
        exprHandler={eqHandler}
      />
      <Button value={"."} style={{ left: 780, bottom: 140 }} />
      <Button
        value="C"
        style={{ left: 680, bottom: 140 }}
        exprHandler={cHandler}
      />
    </div>
  );
};

export default Calculator;

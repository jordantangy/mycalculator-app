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
    setout("");
    setExpr("");
    setResult(0);
  };

  return (
    <div id="calculator-wrapper">
      <Screen val={out} res={result}></Screen>
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
        style={{ left: 310, top: -740 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"-"}
        style={{ left: 310, top: -730 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"+"}
        style={{ left: 310, top: -720 }}
        exprHandler={onTypeHandler}
      />
      <Button
        value={"="}
        style={{ left: 310, top: -710 }}
        exprHandler={eqHandler}
      />
      <Button value={"."} style={{ left: 210, top: -790 }} />
      <Button
        value="C"
        style={{ left: 110, top: -870 }}
        exprHandler={cHandler}
      />
    </div>
  );
};

export default Calculator;

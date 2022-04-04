import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = (props) => {
  const [out, setout] = useState(0);

  const handler = (obj) => {
    setout(obj.number);
  };

  return (
    <div id="calculator-wrapper">
      <Screen val={out}></Screen>
      <Button
        value={0}
        style={{ left: 580, bottom: 140 }}
        numHandler={handler}
      />
      <Button value={1} style={{ left: 580, top: 400 }} numHandler={handler} />
      <Button value={2} style={{ left: 680, top: 400 }} numHandler={handler} />
      <Button value={3} style={{ left: 780, top: 400 }} numHandler={handler} />
      <Button
        value={4}
        style={{ left: 580, bottom: 330 }}
        numHandler={handler}
      />
      <Button
        value={5}
        style={{ left: 680, bottom: 330 }}
        numHandler={handler}
      />
      <Button
        value={6}
        style={{ left: 780, bottom: 330 }}
        numHandler={handler}
      />
      <Button
        value={7}
        style={{ left: 580, bottom: 420 }}
        numHandler={handler}
      />
      <Button
        value={8}
        style={{ left: 680, bottom: 420 }}
        numHandler={handler}
      />
      <Button
        value={9}
        style={{ left: 780, bottom: 420 }}
        numHandler={handler}
      />
      <Button value={"x"} style={{ left: 880, bottom: 420 }} />
      <Button value={"-"} style={{ left: 880, bottom: 330 }} />
      <Button value={"+"} style={{ left: 880, bottom: 235 }} />
      <Button value={"="} style={{ left: 880, bottom: 140 }} />
      <Button value={"."} style={{ left: 780, bottom: 140 }} />
      <Button value="C" style={{ left: 680, bottom: 140 }} />
    </div>
  );
};

export default Calculator;

import logo from "./logo.svg";
import "./App.css";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import Calculator from "./components/calculator";
import "./components/calc.css";
import "./components/Button.css";
import Screen from "./components/Screen";
import Style from "./components/Style";

function App() {
  return (
    <div>
      <Calculator />
      <Style />
    </div>
  );
}

export default App;

import "./Screen.css";

const Screen = (props) => {
  return (
    <div className="display">
      <output>{props.val}</output>
    </div>
  );
};

export default Screen;

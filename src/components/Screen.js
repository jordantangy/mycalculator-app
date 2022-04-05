import "./Screen.css";

const Screen = (props) => {
  return (
    <div className="display" style={{ height: 50 }}>
      <div className="displayOnScreen" style={{ direction: "rtl" }}>
        {props.val.includes("=") ? props.res : props.val}
      </div>
    </div>
  );
};

export default Screen;

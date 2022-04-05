import "./Screen.css";

const Screen = (props) => {
  return (
    <div className="display" style={{ height: 50 }}>
      <div className="displayOnScreen" style={{ direction: "rtl" }}>
        {props.val.includes("=")
          ? Math.round(props.res * 100 + Number.EPSILON) / 100
          : props.val}
        {console.log(props.exp)}
      </div>
    </div>
  );
};

export default Screen;

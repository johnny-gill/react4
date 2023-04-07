import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick} // 이건 안해도 되지만 추후 확장성 때문에 한듯?
    >
      {props.children}
    </button>
  );
};

export default Button;

import "./style.css";

export const AppButton = ({ size = "small", children, onClickButton }) => {
  return (
    <div className="button__container">
      <button
        onClick={onClickButton}
        className={`button__item ${
          size === "small" ? "button--small" : "button--large"
        }`}>
        {children}
      </button>
    </div>
  );
};

import { AppButton } from "../app-button/AppButton";
import "./header.css";
import { useState } from "react";

export const Header = () => {
  const [isPushedPlus, setPlus] = useState(false);
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__logo">ToDo App</h1>
        <div className="header__search">
          <input
            type="search"
            className={`header__placesearch ${
              isPushedPlus ? "header__placesearch--active" : ""
            }`}></input>
        </div>
        <div class="big__button">
          <AppButton
            isPushedPlus={isPushedPlus}
            onClickButton={() => {
              setPlus(!isPushedPlus);
              console.log(isPushedPlus);
            }}
            size={"large"}>
            +
          </AppButton>
        </div>
      </div>
    </div>
  );
};

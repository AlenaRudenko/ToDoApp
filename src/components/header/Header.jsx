import { AppButton } from "../app-button/AppButton";
import "./header.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <h1 className='header__logo'>ToDo App</h1>
        <div className='header__search'>
          <input type='search' className='header__placesearch'></input>
        </div>
        <div class='big__button'>
          <AppButton size={"large"}>+</AppButton>
        </div>
      </div>
    </div>
  );
};

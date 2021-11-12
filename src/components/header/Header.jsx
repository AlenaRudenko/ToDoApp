import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__logo">ToDo App</h1>
        <div className="header__search">
          <input type="search" className="header__placesearch"></input>
        </div>
        <div className="header__button">
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

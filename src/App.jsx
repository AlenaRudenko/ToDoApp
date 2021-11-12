import "./App.css";
import { ToDoItem } from "./components/todo/ToDoItem";

function App() {
  return (
    <div className="app">
      <div className="container">
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
        <div className="main">
          <ToDoItem text={"Wake up"} isChecked={true} isFavourite={true} />
          <ToDoItem text={""} isChecked={true} isFavourite={true} />
          <ToDoItem
            text={"Brush teeth"}
            isChecked={false}
            isFavourite={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

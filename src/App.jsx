import "./App.css";
import Star from "./components/StarOutline";
import { ToDoItem } from "./components/todo/ToDoItem";

function App() {
  return (
    <div className='App'>
      <div className='Container'>
        <div className='Header'>
          <div className='header__container'>
            <h1 className='Header__logo'>ToDo App</h1>
            <div className='Header__search'>
              <input type='search' className='Header__placesearch'></input>
            </div>
            <div className='Header__button'>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className='Main'>
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

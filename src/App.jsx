import "./App.css";
import { Header } from "./components/header/Header";
import { ToDoItem } from "./components/todo/ToDoItem";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="main">
          <ToDoItem text={"Wake up"} isChecked={true} isFavourite={true} />
          <ToDoItem text={""} isChecked={false} isFavourite={false} />
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

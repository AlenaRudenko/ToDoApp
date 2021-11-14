import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { ToDoItem } from "./components/todo/ToDoItem";
const mock = [
  { text: "wake up", isChecked: true, isFavourite: false, id: "1" },
  { text: "do bed", isChecked: false, isFavourite: false, id: "2" },
  { text: "feed cat", isChecked: false, isFavourite: true, id: "3" },
];

const test2 = (userName) => {
  console.log("IM TEST 2", userName);
};

const test = (a, b, cb) => {
  cb();
  return a + b;
};

test(1, 2, test2);

function App() {
  const [todos, setTodos] = useState(mock);
  const deleteTodo = (id) => {
    const result = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(result);
    console.log(result);
  };
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <div className='main'>
          {todos.map((item) => {
            return (
              <ToDoItem
                text={item.text}
                isChecked={item.isChecked}
                isFavourite={item.isFavourite}
                id={item.id}
                delTodo={deleteTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

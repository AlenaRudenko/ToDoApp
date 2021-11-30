import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import ShopList from "./components/todo/ShopList";
import ToDoItem from "./components/todo/ToDoItem";
const mock = [
  { text: "wake up", isChecked: true, isFavourite: false, id: "1" },
  { text: "do bed", isChecked: false, isFavourite: false, id: "2" },
  { text: "feed cat", isChecked: false, isFavourite: true, id: "3" },
  { text: "feed cat", isChecked: false, isFavourite: true, id: "3" },
];
const shopArr = [
  { item: "молоко", count: 2, isBuy: false, id: "no1" },
  { item: "кефир", count: 1, isBuy: false, id: "no2" },
  { item: "хлеб", count: 1, isBuy: false, id: "no3" },
  { item: "ломтишка", count: 10, isBuy: false, id: "no4" },
  { item: "банан", count: 6, isBuy: true, id: "no5" },
];

class User {
  constructor({ name = "Alf", age = 20 } = {}) {
    this.name = name;
    this.age = age;
  }
  name = "";
  loshara = 0;
}
const user1 = new User({ name: "lols", age: 15 });
const user2 = new User();
console.log(user1, user2);
function App() {
  const [todos, setTodos] = useState(mock);
  const [purshase, setPurshase] = useState(shopArr);
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const deletePurshase = (id) => {
    setPurshase(
      purshase.filter((item) => {
        return item.id !== id;
      })
    );
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
          {purshase.map((item) => {
            return (
              <ShopList
                item={item.item}
                count={item.count}
                isBuy={item.isBuy}
                id={item.id}
                delPurshase={deletePurshase}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

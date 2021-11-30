import { Pencil } from "./Pencil";
import "./style.css";
import { Trash } from "./Trash";
import { AppButton } from "../app-button/AppButton";
import { CheckedButton } from "./CheckedButton";
import react from "react";

class ToDoItem extends react.Component {
  render() {
    return (
      <div className="Main__item">
        <div className="Main__group">
          <CheckedButton onClickButton={() => {}} />
          <div className={`Main__task `}>
            {this.props.text ||
              "Твоя возможность быть продуктивнее ! Поставь задачу :)"}
          </div>
        </div>
        <div className="Main__fav">
          <AppButton onClickButton={() => {}}>
            {/* {fav ? <StarFill /> : <StarOutline />} */}
          </AppButton>
          <AppButton
            onClickButton={() => {
              this.props.delTodo(this.props.id);
            }}>
            <Trash />
          </AppButton>
          <AppButton>
            <Pencil />
          </AppButton>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
// export const ToDoItem = (props) => {
//   const [check, setCheck] = useState(props.isChecked);
//   const [fav, setFav] = useState(props.isFavourite);
// };

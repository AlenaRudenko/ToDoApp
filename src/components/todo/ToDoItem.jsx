import { Pencil } from "./Pencil";
import "./style.css";
import { Trash } from "./Trash";
import { AppButton } from "../app-button/AppButton";
import { CheckedButton } from "./CheckedButton";
import react from "react";
import { StarFill } from "./StarFill";
import StarOutline from "./StarOutline";
import EditWindow from "./EditWindow";

class ToDoItem extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked,
      isFavourite: props.isFavourite,
      isPushEdit: props.isPushEdit,
      isExit: props.isExit,
    };
  }
  render() {
    return (
      <div className="Main__item">
        <div className="Main__group">
          <CheckedButton
            isChecked={this.state.isChecked}
            onClickButton={() => {
              this.setState({ isChecked: !this.state.isChecked });
            }}
          />
          <div className={`Main__task `}>
            {this.props.text ||
              "Твоя возможность быть продуктивнее ! Поставь задачу :)"}
          </div>
        </div>
        <div className="Main__fav">
          <AppButton
            onClickButton={() => {
              this.setState({ isFavourite: !this.state.isFavourite });
            }}>
            {this.state.isFavourite ? <StarFill /> : <StarOutline />}
          </AppButton>
          <AppButton
            onClickButton={() => {
              this.props.delTodo(this.props.id);
            }}>
            <Trash />
          </AppButton>
          <AppButton
            onClickButton={() => {
              this.setState({ isPushEdit: !this.state.isPushEdit });
              console.log(this.state.isPushEdit);
            }}
            isPushEdit={this.state.isPushEdit}>
            <Pencil />
          </AppButton>
          <EditWindow isPushEdit={this.state.isPushEdit} />
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

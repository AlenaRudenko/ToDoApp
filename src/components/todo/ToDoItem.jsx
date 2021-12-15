import { Pencil } from "./Pencil";
import "./style.css";
import { Trash } from "./Trash";
import { AppButton } from "../app-button/AppButton";
import { CheckedButton } from "./CheckedButton";
import react from "react";
import { StarFill } from "./StarFill";
import StarOutline from "./StarOutline";

class ToDoItem extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }
  componentDidMount() {
    console.log("componentDidMount", this.props.id);
  }
  componentDidUpdate(prevprops) {
    console.log("componentDidUpdate", this.props.text, prevprops.text);
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  componentWillUnmount() {
    console.log("componentWillUnmount", this.props.text);
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className='Main__content'>
        <div
          className={`Main__item ${
            this.state.isEdit ? "Main__item--active" : ""
          } `}
        >
          <div className='Main__item__firstcontainer'>
            <div className='Main__group'>
              <CheckedButton
                isChecked={this.props.isChecked}
                onClickButton={() => {
                  this.props.changeChecked(
                    this.props.id,
                    !this.props.isChecked
                  );
                }}
              />
              <div className={`Main__task `}>{this.props.text}</div>
            </div>
            <div className='Main__fav'>
              <AppButton
                onClickButton={() => {
                  this.props.changeIsFavourite(
                    this.props.id,
                    !this.props.isFavourite
                  );
                }}
              >
                {this.props.isFavourite ? <StarFill /> : <StarOutline />}
              </AppButton>
              <AppButton
                onClickButton={() => {
                  this.props.delTodo(this.props.id);
                }}
              >
                <Trash />
              </AppButton>
              <AppButton
                onClickButton={() => {
                  this.setState({ isEdit: !this.state.isEdit });
                }}
              >
                <Pencil />
              </AppButton>
            </div>
          </div>
          {this.state.isEdit && (
            <div className='Main__item__secondcontainer'>
              <div className='Main__inputContainer'>
                <div className='Main__input'>
                  <input
                    type='text'
                    className='toDoEdit'
                    onChange={this.handleChange}
                  ></input>
                </div>
                <AppButton
                  onClickButton={() => {
                    this.props.changeTodoValue(this.props.id, this.state.value);
                    this.setState({ isEdit: !this.state.isEdit });
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-send-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z'
                    />
                  </svg>
                </AppButton>
              </div>
              <div className='Main__tags'>
                <AppButton>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-tags-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
                    <path d='M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z' />
                  </svg>
                </AppButton>
              </div>
            </div>
          )}
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

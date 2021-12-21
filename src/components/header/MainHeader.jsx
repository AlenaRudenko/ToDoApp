import React from "react";
import { AppButton } from "../app-button/AppButton";

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPushedPlus: false,
      todoValue: "",
    };
  }
  handleChange = (value) => {
    this.setState({ todoValue: value });
  };
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="header__logo">ToDo App</h1>
          {this.state.isPushedPlus && (
            <div className="header__search--active">
              <div className="header__searchContainer">
                <input
                  onChange={(e) => {
                    this.handleChange(e.target.value);
                  }}
                  type="text"
                  className={"header__placesearch"}></input>
                <AppButton
                  onClickButton={() => {
                    this.props.createTodo(this.state.todoValue);
                    this.setState({ isPushedPlus: !this.state.isPushedPlus });
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-send-fill"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
                    />
                  </svg>
                </AppButton>
              </div>
            </div>
          )}

          <div class="big__button">
            <AppButton
              isPushedPlus={this.state.isPushedPlus}
              onClickButton={() => {
                this.setState({ isPushedPlus: !this.state.isPushedPlus });
              }}
              size={"large"}>
              +
            </AppButton>
          </div>
        </div>
      </div>
    );
  }
}
export default MainHeader;

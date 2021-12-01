import { AppButton } from "../app-button/AppButton";
import ShopButton from "../app-button/ShopButton";
import { Trash } from "./Trash";
import React from "react";

class ShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isBought: false };
  }
  render() {
    return (
      <div className="Main__item Main__item--purshase">
        <div className="main__container">
          <ShopButton
            isBought={this.state.isBought}
            onClickButton={() => {
              this.setState({ isBought: !this.state.isBought });
            }}
          />
          <div className={`Main__task`}>{this.props.item}</div>
        </div>
        <div className="purshase__buttons">
          <AppButton onClickButton={() => {}}>+</AppButton>
          <AppButton onClickButton={() => {}}>-</AppButton>
          <AppButton
            onClickButton={() => {
              this.props.delPurshase(this.props.id);
            }}>
            <Trash />
          </AppButton>
        </div>
      </div>
    );
  }
}
export default ShopList;

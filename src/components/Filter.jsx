import React from "react";
import { AppButton } from "./app-button/AppButton";
import ExitPic from "./ExitPic";

import "./filter.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "",
    };
  }
  onFilterChange = (value) => this.setState({ filterValue: value });
  render() {
    return (
      <div className="filter__container">
        <div className="filter__flexcontainer">
          <div className="filter__group">
            <input
              type="text"
              className="header__placesearch"
              value={this.state.filterValue}
              onChange={(e) => {
                this.onFilterChange(e.target.value);
                this.props.compareTodo(e.target.value);
              }}></input>
            <AppButton
              onClickButton={() => {
                this.setState({ filterValue: "" });
              }}>
              <ExitPic />
            </AppButton>
          </div>

          <div className="filter__group">
            <AppButton />
            <AppButton />
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;

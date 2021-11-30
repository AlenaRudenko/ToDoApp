import { useState } from "react/cjs/react.development";
import { AppButton } from "../app-button/AppButton";
import { ShopButton } from "../app-button/ShopButton";
import { Trash } from "./Trash";

export const ShopList = (props) => {
  const [buy, setBuy] = useState(props.isBuy);
  const [counter, setCounter] = useState(1);
  return (
    <div className="Main__item Main__item--purshase">
      <div className="main__container">
        <ShopButton
          bought={buy}
          onClickButton={() => {
            console.log(buy);
            buy ? setBuy(false) : setBuy(true);
            console.log(setBuy);
          }}
        />
        {counter}
        <div className={`Main__task ${buy ? "Main--taskchecked" : ""}`}>
          {props.item}
        </div>
      </div>
      <div className="purshase__buttons">
        <AppButton
          onClickButton={() => {
            setCounter(counter + 1);
          }}>
          +
        </AppButton>
        <AppButton
          onClickButton={() => {
            counter > 1 && setCounter(counter - 1);
          }}>
          -
        </AppButton>
        <AppButton
          onClickButton={() => {
            props.delPurshase(props.id);
          }}>
          <Trash />
        </AppButton>
      </div>
    </div>
  );
};

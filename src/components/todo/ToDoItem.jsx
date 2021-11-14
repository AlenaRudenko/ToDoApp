import { StarFill } from "./StarFill";
import StarOutline from "./StarOutline";
import { Pencil } from "./Pencil";
import "./style.css";
import { Trash } from "./Trash";
import { AppButton } from "../app-button/AppButton";
import { useState } from "react";
import { CheckedButton } from "./CheckedButton";

export const ToDoItem = (props) => {
  return (
    <div className='Main__item'>
      <div className='Main__group'>
        <CheckedButton isChecked={props.isChecked} />
        <div className={`Main__task ${props.isChecked && "Main--taskchecked"}`}>
          {props.text ||
            "Твоя возможность быть продуктивнее ! Поставь задачу :)"}
        </div>
      </div>
      <div className='Main__fav'>
        <AppButton>
          {props.isFavourite ? <StarFill /> : <StarOutline />}
        </AppButton>
        <AppButton
          onClickButton={() => {
            props.delTodo(props.id);
          }}
        >
          <Trash />
        </AppButton>
        <AppButton>
          <Pencil />
        </AppButton>
      </div>
    </div>
  );
};

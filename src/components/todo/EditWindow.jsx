import { useState } from "react";
import { AppButton } from "../app-button/AppButton";

function EditWindow({ isPushEdit = false }) {
  console.log("пуш из эдит окна", isPushEdit);
  const [isExit, SetExit] = useState(false);
  return (
    isPushEdit && (
      <div
        className={`edit__container ${
          isExit === false ? "edit__container--active" : ""
        } `}>
        <div className={"edit__window"}>
          <AppButton
            onClickButton={() => {
              SetExit(!isExit);
            }}
          />
        </div>
      </div>
    )
  );
}

export default EditWindow;

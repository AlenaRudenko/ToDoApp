import { StarFill } from "../StarFill";
import StarOutline from "../StarOutline";
import "./style.css";

export const ToDoItem = (props) => {
  console.log("props  ", props);
  return (
    <div className='Main__item'>
      <div className='Main__group'>
        <div
          className={`Main__point ${
            props.isChecked ? "Main--pointchecked" : ""
          }`}
        >
          {props.isChecked && (
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 122.88 109.76'
              width='15px'
              heigh='15px'
              fill='#455B74'
            >
              <defs>
                <style>.cls-1</style>
              </defs>
              <title>red-check-mark</title>
              <path d='M0,52.88l22.68-.3A84.1,84.1,0,0,1,46,72.44,314.13,314.13,0,0,1,105.6,0h17.28A522.93,522.93,0,0,0,46.77,109.76C36,86.69,21,67.27,0,52.88Z' />
            </svg>
          )}
          {/* {props.isChecked ? (
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 122.88 109.76'
              width='15px'
              heigh='15px'
              fill='#455B74'
            >
              <defs>
                <style>.cls-1</style>
              </defs>
              <title>red-check-mark</title>
              <path d='M0,52.88l22.68-.3A84.1,84.1,0,0,1,46,72.44,314.13,314.13,0,0,1,105.6,0h17.28A522.93,522.93,0,0,0,46.77,109.76C36,86.69,21,67.27,0,52.88Z' />
            </svg>
          ) : undefined} */}
        </div>
        <div className='Main__task Main--taskchecked'>
          {props.text || "Эххх пустота к сожалению простите"}
        </div>
      </div>
      <div className='Main__fav'>
        {props.isFavourite ? <StarFill /> : <StarOutline />}
      </div>
    </div>
  );
};

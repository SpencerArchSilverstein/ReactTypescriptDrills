import "./App.css";
import TicTacToe from "./TicTacToe";
import { useState } from "react";

type ToDoList = {
  id: number;
  item: string;
  checked: boolean;
};
function App() {
  const [toDo, setToDo] = useState<Array<ToDoList>>([
    { id: 0, item: "Do laundry", checked: false },
    { id: 1, item: "Make bed", checked: false },
    { id: 2, item: "Wash dishes", checked: false },
  ]);

  const handleCheckbox = (id: number) => {
    const newList = toDo.map((todoItem) => {
      if (todoItem.id == id) {
        console.log("Catching");
        return { ...todoItem, checked: !todoItem.checked };
      }
      return todoItem;
    });
    // console.log(newList);
    setToDo(newList);
  };
  return (
    <>
      {toDo.map((todo, index) => (
        
        <div className="flex gap-3">
          <input
            type="checkbox"
            onClick={() => handleCheckbox(index)}
            className="w-5"
          ></input>
          <ul
            key={index}
            className={
              todo.checked ? "line-through bold text-3xl" : "bold text-3xl"
            }
          >
            {todo.item}
          </ul>
        </div>
      ))}
      <TicTacToe />
    </>
  );
}

export default App;

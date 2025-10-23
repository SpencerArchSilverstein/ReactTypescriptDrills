import "./App.css";
import TicTacToe from "./TicTacToe";
import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState([
    { id: 0, item: "Do laundry", checked: false },
    { id: 1, item: "Make bed", checked: false },
    { id: 2, item: "Wash dishes", checked: false },
  ]);

  // function handleCheckbox(id:number) {
  //   const newList = toDo.map((item,index) => (id{ ...toDo, checked: !item.checked });
  //   setToDo(newList);
  // }
  return (
    <>
      {/* {toDo.map((todo, index) => (
        <div className="flex gap-3">
          <input type="checkbox" onClick={() => handleCheckbox(todo)}></input>
          <ul id={String(index)} className={todo.checked ? "line-through" : ""}>
            {todo.item}
          </ul>
        </div>
      ))} */}
      <TicTacToe />
    </>
  );
}

export default App;

import { useState } from "react";
type ToDoList = {
  ind: number;
  item: string;
  checked: boolean;
  editing: boolean;
};

export default function ToDo() {
  const [toDo, setToDo] = useState<Array<ToDoList>>([
    { ind: 0, item: "Do laundry", checked: false, editing: false },
    { ind: 1, item: "Make bed", checked: false, editing: false },
    { ind: 2, item: "Wash dishes", checked: false, editing: false },
  ]);

  const [newItem, setNewItem] = useState("");
  function handleAddNewToDoItem(tItem: string) {
    if (tItem == "") {
      return;
    }
    setToDo([
      ...toDo,
      {
        ind: toDo.length == 0 ? 0 : toDo[toDo.length - 1].ind + 1,
        item: tItem,
        checked: false,
        editing: false,
      },
    ]);
    setNewItem("");
  }

  function hanldeDeleteItem(index: number) {
    const newList = toDo.map((todoItem) => {
      if (todoItem.ind == index) {
        return { ...todoItem, checked: !todoItem.checked };
      }
      return todoItem;
    });
    const newNewList = newList.filter((tod) => tod.ind !== index);
    setToDo(newNewList);
  }

  function handleCheckboxAndEditingAndSaving(
    index: number,
    func: string,
    newText?: string
  ) {
    const newList = toDo.map((todoItem) => {
      if (todoItem.ind == index) {
        if (func == "check") return { ...todoItem, checked: !todoItem.checked };
        if (func == "edit") return { ...todoItem, editing: !todoItem.editing };
        if (func == "save" && newText) return { ...todoItem, item: newText };
      }
      return todoItem;
    });
    setToDo(newList);
  }
  return (
    <>
      <div className="flex justify-center text-center p-5 outline-1 max-w-[50%] ml-[25%] mt-[5%]">
        <div>
          {toDo.map((todo) => (
            <div
              key={todo.ind}
              className="flex flex-row gap-3 align-center mt-7"
            >
              <input
                type="checkbox"
                onClick={() =>
                  handleCheckboxAndEditingAndSaving(todo.ind, "check")
                }
                className="w-5"
              ></input>
              {todo.editing ? (
                <input
                  defaultValue={todo.item}
                  onChange={(e) =>
                    handleCheckboxAndEditingAndSaving(
                      todo.ind,
                      "save",
                      e.target.value
                    )
                  }
                  className="outline-1 outline-gray-400 p-1 rounded-md text-3xl"
                ></input>
              ) : (
                <ul
                  className={
                    todo.checked
                      ? "line-through bold text-3xl "
                      : "bold text-3xl"
                  }
                >
                  {todo.item}
                </ul>
              )}

              <button
                className="outline-1 outline-gray-400 p-2 rounded-md"
                onClick={() =>
                  handleCheckboxAndEditingAndSaving(todo.ind, "edit")
                }
              >
                {todo.editing ? "SAVE" : "EDIT"}
              </button>
              <button
                onClick={() => hanldeDeleteItem(todo.ind)}
                className="outline-1 p-2 rounded-md outline-gray-500 w-10 text-xl"
              >
                X
              </button>
            </div>
          ))}
          <div className="flex align-center ml-[25%]">
            <input
              type="text"
              placeholder="New To-Do List Item"
              className="w-50 outline-2 h-10 mt-5 rounded-md"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            ></input>
            <button
              className="outline-gray-400 outline-1 h-10 mt-5 ml-5 rounded-md p-2"
              onClick={() => handleAddNewToDoItem(newItem)}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

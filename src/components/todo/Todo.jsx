import React from "react";
import { useState } from "react";

export default function Todo() {
  const defaultItems = [
    {
      name: "ITEM A",
    },
    {
      name: "ITEM B",
    },
    {
      name: "ITEM C",
    },
  ];
  const [text, setText] = useState();
  const [todo, setTodo] = useState(defaultItems);
  const addTodo = () => {
    setTodo((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addTodo}>Add</button>
      {todo &&
        todo.map((val, key) => {
          return <div key={key}>{val.name}</div>;
        })}
    </div>
  );
}

"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createTodo: (value: string, description: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    await createTodo(title, description);
    setTitle("");
    setDescription("");
  };

  // Rendering the AddTodo component
  return (
    <div className="w-full flex flex-col gap-1 mt-2 p-20">
      {/* Input field for entering new todo text */}
      <input
        type="text"
        placeholder="Enter title"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={handleInput}
        value={title}
      />
      <input
        type="text"
        placeholder="Enter description"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      {/* Button for adding a new todo */}
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-full py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

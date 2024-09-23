"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createUser: (name: string, phone: number) => void;
}

const AddUser: FC<Props> = ({ createUser }) => {
  // State for handling input value
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(Number(e.target.value)); // Convert string to number
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    await createUser(name, phone);
    setName("");
    setPhone(0);
  };

  // Rendering the AddTodo component
  return (
    <div className="w-full flex flex-col gap-1 mt-2">
      {/* Input field for entering new todo text */}
      <input
        type="text"
        placeholder="Enter username"
        className="w-full px-2 py-2 border border-gray-200 rounded outline-none"
        onChange={handleInput}
        value={name}
      />
      <input
        type="number"
        placeholder="Enter description"
        className="w-full px-2 py-2 border border-gray-200 mt-2 rounded outline-none"
        onChange={handlePhoneInput}
        value={phone}
      />
      {/* Button for adding a new user */}
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-full py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddUser;

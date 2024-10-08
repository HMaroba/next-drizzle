"use client";
import { ChangeEvent, FC, useState } from "react";
import { userType } from "../types/user.type";

interface Props {
  user: userType;
  changeUserName: (id: number, name: string, phone: string) => void;
  deleteUser: (id: number) => void;
}

const User: FC<Props> = ({ user, changeUserName, deleteUser }) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value); // Convert string to number
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeUserName(user.id, name, phone);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setName(user.name);
    setPhone(user.phone);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteUser(user.id);
    }
  };

  // Rendering the Todo component
  return (
    <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      <div>
        <input
          type="text"
          value={name}
          onChange={handleTextChange}
          readOnly={!editing}
          className={`
       outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
        />

        <input
          type="text"
          value={phone}
          onChange={handlePhoneInput}
          readOnly={!editing}
          className={`
       outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full mt-2`}
        />
      </div>
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default User;

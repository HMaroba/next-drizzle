"use client";
import { FC, useState } from "react";
import { addUsers , deleteUser, editUser } from "../actions/userActions";
import { userType } from "../types/user.type";
import AddUser from "../addUser/page";
import User from "../user/page";

interface Props {
  users: userType[];
}

const Users: FC<Props> = ({ users }) => {
  // State to manage the list of todo items
  const [userList, setUsers] = useState<userType[]>(users);

  // Function to create a new todo item
  const createTodo = (name: string, phone: number) => {
    const id = (userList.at(-1)?.id || 0) + 1;
    addUsers(id, name, phone);
    setUsers((prev) => [...prev, { id: id, name, phone, done: false }]);
  };

 // Function to change the user name
    const changeTodoText = (id: number, name: string, phone: number) => {
      setUsers((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, name, phone } : todo))
      );
      editUser(id, name, phone);
    };

  // Function to delete a todo item
    const deleteUsers = (id: number) => {
      setUsers((prev) => prev.filter((todo) => todo.id !== id));
      deleteUser(id);
    };

  // Rendering the Todo List component
  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">User Management</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {userList?.map((user) => (
          <User
            key={user.id}
            user={user}
            changeUserName={changeTodoText}
            deleteUser={deleteUsers}
          />
        ))}
      </div>
      {/* Adding Todo component for creating new todos */}
      <AddUser createUser={createTodo} />
    </main>
  );
};

export default Users;

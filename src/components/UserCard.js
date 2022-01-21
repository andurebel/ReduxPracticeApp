import React from "react";
import { deleteUser, updateUsername } from "../features/Users";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

const UserCard = ({ id, name, username, email }) => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");
  return (
    <article className="bg-gray-200 m-5 rounded hover:shadow-xl p-4">
      <h1 className="text-xl">{name}</h1>
      <h2 className="text-red-500">{username}</h2>
      <p className="font-bold">{email}</p>
      <input
        value={newUsername}
        type="text"
        className="p-2 rounded-xl shadow my-4"
        placeholder="Enter new username"
        onChange={(event) => setNewUsername(event.target.value)}
      />
      <div className="flex  justify-center items-center py-4">
        <button
          onClick={() => {
            if (!newUsername) return;
            dispatch(
              updateUsername({ id, username: newUsername }),
              setNewUsername(""),
            );
          }}
          className="flex items-center justify-center border border-yellow-500 mx-2 rounded p-2 hover:bg-yellow-500 hover:text-white hover:shadow-xl"
        >
          Update user
          <div className="mx-4 hover:animate-bounce">
            <GrUpdate />
          </div>
        </button>
        <button
          onClick={() => {
            dispatch(deleteUser({ id }));
          }}
          className="flex items-center justify-center border border-red-500 mx-2 rounded p-2 hover:bg-red-500 hover:text-white hover:shadow-xl "
        >
          Delete user
          <div className="mx-4 hover:animate-bounce ">
            <AiOutlineDelete />
          </div>
        </button>
      </div>
    </article>
  );
};

export default UserCard;

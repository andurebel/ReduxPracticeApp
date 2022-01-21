import React from "react";
import { deleteUser, updateUsername } from "../features/Users";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
      <div>
        <button
          onClick={() => {
            dispatch(
              updateUsername({ id, username: newUsername }),
              setNewUsername(""),
            );
          }}
          className="border border-yellow-500 mx-2 rounded p-2 hover:bg-yellow-500 hover:text-white hover:shadow-xl"
        >
          Update user
        </button>
        <button
          onClick={() => {
            dispatch(deleteUser({ id }));
          }}
          className="border border-red-500 mx-2 rounded p-2 hover:bg-red-500 hover:text-white hover:shadow-xl "
        >
          Delete user
        </button>
      </div>
    </article>
  );
};

export default UserCard;

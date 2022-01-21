import React from "react";

const UserCard = ({ id, name, username, email }) => {
  return (
    <article className="bg-gray-200 m-5 rounded shadow p-4">
      <h1 className="text-xl">{name}</h1>
      <h2 className="text-red-500">{username}</h2>
      <p className="font-bold">{email}</p>
    </article>
  );
};

export default UserCard;

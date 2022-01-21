import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";
import UserCard from "./components/UserCard";
import { useState } from "react";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="container-md my-5  text-center ">
      <h1 className="text-2xl my-4">Enter user details:</h1>
      <form
        className="flex flex-col w-3/4 md:max-w-md mx-auto"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="border border-gray-200 p-2 my-2 rounded "
          placeholder="Name"
        />
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          className="border border-gray-200 p-2 my-2 rounded "
          placeholder="Username"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          className="border border-gray-200 p-2 my-2 rounded "
          placeholder="Email"
        />
        <button
          className="bg-blue-500 p-2 rounded shadow text-white hover:bg-blue-400 w-1/4 mx-auto mt-8"
          disabled={!name || !username || !email}
          type="submit"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
                email,
              }),
              setName(""),
              setUsername(""),
              setEmail(""),
            );
          }}
        >
          Add user
        </button>
      </form>
      <div>
        <h1 className="text-2xl text-center my-10 font-bold">
          Current users list
        </h1>
        <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border p-5">
          {userList.map((user) => (
            <UserCard
              name={user.name}
              key={user.id}
              id={user.id}
              email={user.email}
              username={user.username}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

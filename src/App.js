import Button from "./components/Button";
import { useSelector } from "react-redux";
import UserCard from "./components/UserCard";

function App() {
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="container m-5  text-center ">
      <div>
        <input
          type="text"
          className="border border-gray-200"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-200"
          placeholder="Username"
        />
        <Button name="Add User" color="blue" />
      </div>
      <div>
        <h1 className="text-2xl text-center my-10">User List below</h1>
        <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border p-5">
          {userList.map((user) => (
            <UserCard
              name={user.name}
              key={user.id}
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

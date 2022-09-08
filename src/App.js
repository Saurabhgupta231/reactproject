/*import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Restaurant from "./Rcomponents/Basics/Restaurant";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      
    </div>
  );
}

export default App;
*/
import React from "react";
import Restaurant from "./Rcomponents/Basics/Restaurant";
// import UseState from "./Hooks/useState";
// import UseEffect from "./Hooks/useEffect";
// import UseReducer from "./Hooks/useReducer";
// import Todo from "./todoreact/todo";
import Temp from "./Weather/temp";

const App = () => {
  return (
    <div>
      <Restaurant />
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      {/* <Todo /> */}
      <Temp />
    </div>
  );
};

export default App;

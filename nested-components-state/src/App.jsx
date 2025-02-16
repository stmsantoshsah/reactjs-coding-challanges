import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Santosh", age: 25 });

  return (
    <div className="container">
      <h1>React State Management</h1>
      <div className="counter-box">
        <p>Count: <span>{count}</span></p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <Child user={user} setUser={setUser} />
    </div>
  );
};

const Child = ({ user, setUser }) => {
  return (
    <div className="child-box">
      <h2>User Info</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <GrandChild setUser={setUser} />
    </div>
  );
};

const GrandChild = ({ setUser }) => {
  return (
    <div className="grandchild-box">
      <button onClick={() => setUser((prev) => ({ ...prev, age: prev.age + 1 }))}>
        Increment Age
      </button>
    </div>
  );
};

export default App;
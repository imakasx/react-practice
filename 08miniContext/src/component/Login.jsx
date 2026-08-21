import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <>
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;

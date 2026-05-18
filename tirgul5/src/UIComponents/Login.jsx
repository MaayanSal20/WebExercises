import LabeledInput from './LabeledInput';
import ActionButton from './ActionButton';
import { loginUser } from "../services/userService";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
  const result = loginUser(form.email, form.password);

  if (!result.success) {
    alert(result.message);
    return;
  }

  alert("Welcome " + result.user.name);
};
    return (
        <div class="bg-white p-8 rounded shadow-md w-96 justify-self-center 
justify-items-center mx-auto my-16">
            <form id="loginForm" method="post">
                <LabeledInput label="Username or Email" type="text"></LabeledInput>
                <LabeledInput label="Password"
                    type="password"></LabeledInput>
                <ActionButton text="Login"
                    backgroundColor="CornflowerBlue" onClick={() =>
                        handleClick("Login")} />
            </form>
        </div>
    );


}

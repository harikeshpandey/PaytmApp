import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-500 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-2xl px-3 h-max w-80 p-2">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter Your Details To Sign Up!!"} />
          <InputBox
            onchange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"Haikesh"}
            label={"First Name"}
          />
          <InputBox
            onchange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder={"Pandey"}
            label={"Last Name"}
          />
          <InputBox
            onchange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={"example@gmail.com"}
            label={"Email"}
          />
          <InputBox
            onchange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"123455"}
            label={"Password"}
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastname,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign Up"}
          />
          <BottomWarning
            label={"Already Have A Account?"}
            buttontext={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

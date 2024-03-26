import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Signin() {
  return (
    <div className="bg-slate-500 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-2xl px-3 h-max w-80 p-2">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter Details To Sign In"} />
          <InputBox placeholder={"example@email.com"} label={"Email"} />
          <InputBox placeholder={"11232"} label={"Password"} />
          <Button label={"Sign In"} />
          <BottomWarning
            label={"Don't Have An Account"}
            buttontext={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

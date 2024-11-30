import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";

const CaptainLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div className="h-screen w-full  p-6 flex flex-col justify-between items-center">
      <form
        className="w-full min-h-[70%] flex flex-col justify-center items-start gap-6"
        action=""
      >
        <h1 className="text-3xl font-medium">What is your Email ID CAPTAIN?</h1>
        <div className="input w-full flex flex-col gap-1 justify-evenly items-start">
          <p className="text-2xl opacity-80">Email</p>
          <Input
            required
            placeholder="hallo@example.com"
            type="email"
            onInput={(e) => setEmail(e.target.value)}
            value={Email}
          />
        </div>
        <div className="input w-full flex flex-col gap-1 justify-evenly items-start">
          <p className="text-2xl opacity-80">Password</p>
          <Input
            required
            placeholder="password"
            type="text"
            onInput={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </div>
        <div className="flex gap-2 px-2 text-md opacity-70 hover:opacity-100 duration-100 justify-center items-center">
          <Link to="/captain-register" className="text-blue-600">
            Register As Captain
          </Link>
        </div>
        <button
          type="submit"
          className="button relative cursor-pointer w-full rounded-xl h-[60px] flex justify-end items-center bg-black text-white"
        >
          <p className="flex-1 text-center text-2xl">LOGIN</p>
        </button>
      </form>
      <div className="button relative overflow-hidden rounded-xl justify-self-end cursor-pointer w-full h-[60px]">
        <Link
          to="/login"
          className="w-full h-full flex justify-center items-center hover:bg-black hover:text-white duration-150 bg-[#EEEEEE] text-black"
        >
          <p className="flex-1 pointer-events-none text-center text-2xl">LOGIN AS USER</p>
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

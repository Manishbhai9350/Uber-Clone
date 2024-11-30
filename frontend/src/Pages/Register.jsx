import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";

const Register = () => {
    const [FullName, setFullName] = useState({first:'', last:''})
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
  return (
    <div className="h-screen w-full  p-6 flex flex-col justify-between items-center">
      <form
        className="w-full min-h-[70%] flex flex-col justify-center items-start gap-5"
        action=""
      >
        <h1 className="text-3xl font-medium">What is your NAME?</h1>
        <div className="input w-full flex flex-col gap-1 justify-evenly items-start">
          <p className="text-2xl opacity-80">Full Name</p>
          <div className="inp flex gap-1 justify-between items-center w-full h-full ">
          <div className="name w-1/2 h-full">
          <Input
            required
            placeholder="First Name"
            type="text"
            onInput={(e) => setFullName({...FullName,first:e.target.value})}
            value={FullName.first}
          />
          </div>
          <div className="name w-1/2 h-full">
          <Input
            required
            placeholder="Last Name (Optional)"
            type="text"
            onInput={(e) => setFullName({...FullName,last:e.target.value})}
            value={FullName.last}
          />
          </div>
          </div>
        </div>
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
        <div className="flex gap-2 text-xl opacity-70 hover:opacity-100 duration-100 justify-center items-center">
          Already have a ACCOUNT?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </div>
        <button
          type="submit"
          className="button relative cursor-pointer w-full rounded-xl h-[60px] flex justify-end items-center bg-black text-white"
        >
          <p className="flex-1 text-center text-2xl">Register</p>
        </button>
      </form>
      <div className="button relative overflow-hidden rounded-xl justify-self-end cursor-pointer w-full h-[60px]">
        <Link
          to="/captain-register"
          className="w-full h-full flex justify-center items-center hover:bg-black hover:text-white duration-150 bg-[#EEEEEE] text-black"
        >
          <p className="flex-1 pointer-events-none text-center text-2xl">REGISTER AS CAPTAIN</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
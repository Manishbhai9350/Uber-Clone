import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
        <div className="continue z-10 bg-white w-full h-40 px-8 pt-6 pb-2 flex flex-col justify-start gap-6 text-white absolute bottom-0 left-0">
            <h1 className="text-black text-3xl font-semibold ">Get Started With UBER</h1>
            <Link to='/login'>
                <div className="button relative cursor-pointer w-full rounded-xl h-[60px] flex justify-end items-center bg-black">
                    <p className="flex-1 text-center text-2xl">Continue</p>
                    <div className="icon absolute right-2 top-0 flex justify-center items-center h-full w-[50px]">
                        <FaArrowRight size={25} />
                    </div>
                </div>
            </Link>
        </div>
        <div className="absolute z-10 text-white top-6 left-6 ">
            <img className="object-cover h-8" src="/Images/logo.png" alt="" />
        </div>
        <div className="img  absolute z-0 top-0 left-0 w-full h-full">
            <img className="w-full h-full brightness-75 object-cover" src="/Images/home.jpg" alt="uber" />
        </div>
    </div>
  )
}

export default Home
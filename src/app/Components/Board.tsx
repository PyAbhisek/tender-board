import Column from "./Column"
import { Bell } from 'lucide-react';
import userIcon from '../Assests/merge.png'
import Image from "next/image";
const Board = () => {
    return (
        <div className="text-white h-[100vh] bg-[#1F2024] flex flex-col items-center">
            <div className="header border-b  py-[0.5rem] px-[2rem] border-[white] flex items-center justify-between w-[95%]">
                <div className="Logo text-[2rem] font-bold">
                    Board
                </div>
                <div className="utility flex gap-[0.5rem]">
                    <input type="text" placeholder=" Search for tenders" className="w-[25rem] py-[.4rem] px-[1rem] rounded-md" />
                    <button>  <Bell /></button>
                    <div ><Image src={userIcon}  className="w-[2rem] h-auto"alt="placeholderIcon"/></div>
                </div>
            </div>
            <div className="flex gap-[2rem] overflow-x-scroll no-scrollbar w-[88%] mt-[2rem]">
                <Column />
                <Column />
                <Column />
                <Column /> 
                <Column /> 
                <Column />
            </div>
        </div>
    )
}
export default Board
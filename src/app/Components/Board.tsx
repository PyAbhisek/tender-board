import Column from "./Column"

const Board = () => {
    return (
        <div className="text-white h-[100vh] bg-[#1F2024]">
            <div className="header flex items-center justify-between">
                <div className="Logo">
                    Board
                </div>
                <div className="utility flex gap-[0.5rem]">
                    <input type="text" placeholder="search for tenders" />
                    <button>Bell iCon</button>
                    <div >user</div>
                </div>
            </div>
            <div className="flex gap-[2rem] overflow-x-scroll no-scrollbar">
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
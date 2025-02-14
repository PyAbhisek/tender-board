import Card from "./Card"

const Column = () => {
    return (
        <div>
            <div className="h-[40rem] w-[20rem] rounded-[0.5rem] px-[1rem] bg-black text-white">
                <div className="header flex items-center justify-between">
                    <div className="">
                        Pending
                    </div>
                    <div className="flex gap-[0.6rem]">
                        <p>+</p>
                        <p>...</p>
                    </div>
                </div>
                <div className="body flex flex-col gap-[1rem] ">
                    <Card />
                    <Card />
                    <Card />
                    


                </div>

            </div>
        </div>
    )
}
export default Column
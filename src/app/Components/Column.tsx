import Card from "./Card"

const Column = () => {
    return (
        <div>
            Column
            <div className="h-[70rem] w-[20rem] border px-[1rem] bg-black text-white">
                <div className="header flex items-center justify-between">
                    <div className="">
                        Pending
                    </div>
                    <div className="flex gap-[0.6rem]">
                        <p>+</p>
                        <p>...</p>
                    </div>
                </div>
                <div className="body flex flex-col gap-[1rem]">
                    <Card />
                    <Card />

                </div>

            </div>
        </div>
    )
}
export default Column
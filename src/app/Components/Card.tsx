const Card = () => {
    return (
        <div>
            <div className="border  w-[300px] rounded-[0.5rem] bg-[#1F2024] text-white p-[1rem]">
                <div className="header flex items-center justify-between">
                    <div className="status  rounded-[5px] px-[0.5rem] border">
                        <div className=""><p> Pending</p></div>
                    </div>
                    <div className="menu">
                        <button>...</button>
                    </div>
                </div>
                <div className="body">
                    <div className="content">
                        <h5>Tender 1</h5>
                        <p>Construction Pending</p>
                    </div>
                    <div className="assignee flex items-center justify-between">
                        <div>
                            <b>Assignee</b>
                            <p>22 Dec 2024</p>
                        </div>
                        <div>
                            <div className="img"></div>
                            <div className="priority rounded-[5px] px-[0.5rem] border">Low</div>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <div className="items flex gap-[0.6rem]">
                        <p>Comments</p>
                        <p>Attachments</p>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Card
import Image from 'next/image'
import Placeholder from '../Assests/merge.png'
import { MessageSquare } from 'lucide-react';
import { CalendarFold } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
const Card = () => {
   
    return (

        <div>
            <div className="rounded-[0.5rem] bg-[#1F2024] text-white ">
                <div className='px-[1rem] pt-[1rem] pb-[0.6rem]'>
                    <div className="header flex items-center justify-between">
                        <div className="status  rounded-[5px] px-[0.5rem] bg-[#193E54]">
                            <div className="flex items-center gap-[0.5rem]">
                                <div className='h-[8px] rounded-full bg-[#1ea0ec] w-[8px]'></div>
                                <p className="text-[0.7rem]">Pending</p></div>
                        </div>
                        <button><Ellipsis  size={17} /></button>

                    </div>
                    <div className="body">
                        <div className="content mt-[0.6rem]  ">
                            <h5 className='text-[1rem] font-semibold  max-w-[80%] truncate text-ellipsis'>Construction Tender 1</h5>
                            <p className='text-[0.7rem]  max-w-[80%] truncate text-ellipsis mt-[0.2rem]'>Description goes here about the tender</p>
                        </div>
                        <div className="assignee mt-[0.5rem] flex items-center justify-between  ">
                            <div className='flex flex-col gap-[0.5rem] justify-between'>
                                <p className='text-[0.7rem]  font-semibold '>Assignee</p>
                                <p className="text-[0.7rem] flex items-center gap-[5px] leading-none "> <CalendarFold  size={12} />22 Dec 2024</p>
                            </div>
                            <div className='flex flex-col items-end gap-[0.5rem]'>
                                <div className="img"><Image src={Placeholder} alt='placeholderIcond' className='w-[1.2rem] h-auto' /></div>
                                <div className="priority rounded-[5px] px-[0.7rem] bg-[#1D4D2D] text-[0.7rem]">Low</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer border-t border-[#3B3C40]">
                    <div className=" text-[0.7rem] items flex gap-[0.6rem] px-[1rem] py-[0.5rem]">
                        <p className=' flex items-center gap-[5px] leading-none'> <MessageSquare  size={12} /> 12 Comments</p>
                        <p className=' flex items-center gap-[5px] leading-none'> <Paperclip  size={10}/>3 Attachments</p>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Card
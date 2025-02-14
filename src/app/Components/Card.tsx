// @ts-ignore
import { Draggable } from "react-beautiful-dnd";
import Image from 'next/image';
import Placeholder from '../Assests/merge.png';
import { MessageSquare, CalendarFold, Paperclip, Ellipsis } from 'lucide-react';

interface CardProps {
  task: { id: string; content: string; status: string; assignee: string; date: string; priority: string; comments: number; attachments: number };
  index: number;
}

const Card = ({ task, index }: CardProps) => {
  return (
        <div>
          <div className="rounded-[0.5rem] bg-[#1F2024] text-white">
            <div className='px-[1rem] pt-[1rem] pb-[0.6rem]'>
              <div className="header flex items-center justify-between">
                <div className="status rounded-[5px] px-[0.5rem] bg-[#193E54]">
                  <div className="flex items-center gap-[0.5rem]">
                    <div className='h-[8px] rounded-full bg-[#1ea0ec] w-[8px]'></div>
                    <p className="text-[0.7rem]">{task.status}</p>
                  </div>
                </div>
                <button><Ellipsis size={17} /></button>
              </div>
              <div className="body">
                <div className="content mt-[0.6rem]">
                  <h5 className='text-[1rem] font-semibold max-w-[80%] truncate'>{task.content}</h5>
                  <p className='text-[0.7rem] max-w-[80%] truncate mt-[0.2rem]'>Description goes here about the task</p>
                </div>
                <div className="assignee mt-[0.5rem] flex items-center justify-between">
                  <div className='flex flex-col gap-[0.5rem] justify-between'>
                    <p className='text-[0.7rem] font-semibold'>Assignee</p>
                    <p className="text-[0.7rem] flex items-center gap-[5px] leading-none"> <CalendarFold size={12} />{task.date}</p>
                  </div>
                  <div className='flex flex-col items-end gap-[0.5rem]'>
                    <div className="img"><Image src={Placeholder} alt='Assignee' className='w-[1.2rem] h-auto' /></div>
                    <div className="priority rounded-[5px] px-[0.7rem] bg-[#1D4D2D] text-[0.7rem]">{task.priority}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer border-t border-[#3B3C40]">
              <div className="text-[0.7rem] flex gap-[0.6rem] px-[1rem] py-[0.5rem]">
                <p className='flex items-center gap-[5px] leading-none'><MessageSquare size={12} /> {task.comments} Comments</p>
                <p className='flex items-center gap-[5px] leading-none'><Paperclip size={10}/> {task.attachments} Attachments</p>
              </div>
            </div>
          </div>
        </div>
      

  );
};

export default Card;



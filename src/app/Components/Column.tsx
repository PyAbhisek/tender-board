import { Ellipsis } from 'lucide-react';
import Card from "./Card";

interface Task {
  id: string;
  content: string;
  status: string;
  assignee: string;
  date: string;
  priority: string;
  priorityColor:String;
  comments: number;
  attachments: number;
}

interface ColumnProps {
  column: { id: string; title: string; bgColor: String; bgDotColor:String; taskIds: string[] };
  tasks: { [key: string]: Task };
}


const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div>
      <div className="h-[80vh] w-80  relative bg-black text-white">
        <div className="header sticky top-0 bg-black p-4 flex items-center justify-between border-b border-gray-800">

          <div className='flex gap-[0.5rem] items-center'>
            <div className='h-[1rem] rounded-full  w-[1rem]' style={{ backgroundColor: `${column.bgDotColor}` }}></div>
            {column.id}
          </div>
          <div className="flex gap-2">
            <p>+</p>
            <button>
              <Ellipsis size={22} />
            </button>
          </div>
        </div>
        <div className="body flex flex-col gap-4 p-4 overflow-y-auto no-scrollbar h-[calc(100%-4rem)]">
          {column.taskIds.map((taskId, index) => (
            <Card key={taskId} task={tasks[taskId]} bgColor={column.bgColor} bgDotColor={column.bgDotColor} index={index} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Column;

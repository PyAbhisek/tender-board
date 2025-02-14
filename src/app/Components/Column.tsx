import { Ellipsis } from 'lucide-react';
import Card from "./Card";

interface Task {
  id: string;
  content: string;
  status: string;
  assignee: string;
  date: string;
  priority: string;
  comments: number;
  attachments: number;
}

interface ColumnProps {
  column: { id: string; title: string; taskIds: string[] };
  tasks: { [key: string]: Task };
}


const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div>
      <div className="h-[95%] w-80  relative bg-black text-white">
        <div className="header sticky top-0 bg-black p-4 flex items-center justify-between border-b border-gray-800">
          <div>
            Pending
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
            <Card key={taskId} task={tasks[taskId]} index={index} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Column;

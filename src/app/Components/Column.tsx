import { Ellipsis } from 'lucide-react';
import Card from "./Card";

const Column = () => {
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Column;
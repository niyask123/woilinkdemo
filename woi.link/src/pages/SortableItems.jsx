import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

const SortableItem = ({ item, id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex justify-between items-center p-3 rounded shadow ${item.color}`}
    >
      <div className="flex items-center gap-2">
        <span
          {...attributes}
          {...listeners}
          className="cursor-grab text-xl text-gray-700"
        >
          <RxDragHandleDots2 />
        </span>
        <span className="font-medium">{item.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">₹{item.amount}</span>
        <MdDelete className="text-red-600 cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default SortableItem;

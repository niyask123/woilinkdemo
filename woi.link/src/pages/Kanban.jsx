import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

const Kanban = () => {
  const [collections, setCollections] = useState([
    {
      id: "1",
      title: "Social Media",
      items: [
        {
          id: "1",
          title: "YouTube",
          url: "https://www.youtube.com/@niyas",
          clicks: 0,
        },
        {
          id: "2",
          title: "WhatsApp",
          url: "https://wa.me/8075801527",
          clicks: 0,
        },
        {
          id: "3",
          title: "TikTok",
          url: "https://www.tiktok.com/@niyas_k",
          clicks: 0,
        },
      ],
    },
  ]);

  const createNewCollection = () => {
    const newCollection = {
      id: Date.now().toString(),
      title: `New Collection ${collections.length + 1}`,
      items: [],
    };
    setCollections([...collections, newCollection]);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColIndex = collections.findIndex(
      (col) => col.id === source.droppableId
    );
    const destColIndex = collections.findIndex(
      (col) => col.id === destination.droppableId
    );
    const sourceCol = collections[sourceColIndex];
    const destCol = collections[destColIndex];

    const item = sourceCol.items[source.index];
    const newCollections = [...collections];

    newCollections[sourceColIndex].items.splice(source.index, 1);
    newCollections[destColIndex].items.splice(destination.index, 0, item);

    setCollections(newCollections);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Link Collections
        </h2>
        <button
          onClick={createNewCollection}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + New Collection
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-medium mb-4">{collection.title}</h3>

              <Droppable droppableId={collection.id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-4 min-h-[40px] transition-all duration-300 ${
                      snapshot.isDraggingOver ? "bg-gray-100" : ""
                    }`}
                  >
                    {collection.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="bg-gray-50 rounded-md shadow-sm p-3 flex gap-3 items-start"
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="cursor-move mt-1 text-gray-500"
                            >
                              <RxDragHandleDots2 size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="text-md font-semibold">
                                  {item.title}
                                </h4>
                                <span className="text-sm text-gray-600">
                                  Clicks: {item.clicks}
                                </span>
                              </div>
                              <p className="text-sm text-blue-600 break-words">
                                {item.url}
                              </p>
                              <div className="mt-2 space-x-2">
                                <button className="text-sm text-indigo-600 hover:underline">
                                  Edit
                                </button>
                                <button className="text-sm text-red-600 hover:underline">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;

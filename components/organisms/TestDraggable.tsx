import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface Props {}

const TestDraggable = ({}: Props) => {
  function onDragEnd() {}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"abcd"}>
        {(provided) => (
          <div className={"abcd"} ref={provided.innerRef} {...provided.droppableProps}>
            {[0, 1, 2, 3, 4].map((item, index) => {
              return (
                <Draggable key={item} draggableId={String(item)} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {item}
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TestDraggable;

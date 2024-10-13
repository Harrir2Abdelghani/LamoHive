import React from 'react'
import Card from '../Card/Card'
import { Droppable} from 'react-beautiful-dnd';

const TaskColumn = ({ title, tasks, columnId, onDelete, onEdit }) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          className="bg-purple-300 rounded-lg p-4 h-full"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="font-bold text-lg mb-4">{title}</h2>
          {tasks.map((task, index) => (
            <Card key={task.id} task={task} index={index} onDelete={onDelete}  onEdit={onEdit}  />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TaskColumn
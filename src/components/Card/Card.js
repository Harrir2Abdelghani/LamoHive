import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
const Card = ({task, index, onEdit, onDelete }) => {
    const [isEdit,setIsEdit] = React.useState(false);
    const [editedTask,setEditedTask] = React.useState({...task});
    const handleEdit = () => {
        if(isEdit) {
            onEdit(editedTask);
        }
        setIsEdit(!isEdit)
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditedTask((prev) =>({...prev, [name]: value}));
    };

  return (
    <Draggable draggableId={task.id.toString()} index={index} >
        {(provided) => (
            <div className='bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition relative overflow-hidden'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
                {isEdit ? (
                    <>
                    <input
                        type='text'
                        name='title'
                        value={editedTask.title}
                        onChange={handleChange}
                        className='border rounded p-1 w-full mb-2'
                        placeholder='Task Title'
                        ></input>
                    <textarea
                name="description"
                value={editedTask.description}
                onChange={handleChange}
                className="border rounded p-1 w-full mb-2"
                rows="3"
                placeholder="Task Description"
              /> 
              <input
                type="number"
                name="estimatedTime"
                value={editedTask.estimatedTime}
                onChange={handleChange}
                className="border rounded p-1 w-full mb-2"
                placeholder="Estimated Time (hours)"
              />
              <input
                type="date"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
                className="border rounded p-1 w-full mb-4"
              />   
                    </>
                ) : (
                    <>
              <h3 className="font-bold text-center text-xl">{task.title}</h3>
              <p>{task.description}</p>
              {task.image && (
                <img
                  src={task.image}
                  alt="Task"
                  className="my-2 w-full h-auto rounded max-h-40 object-cover" // Limit height of image
                />
              )}
              <p className="text-gray-600 underline">
                Estimated Time: <span className="font-bold">{task.estimatedTime}</span> hours
              </p>
              <p className="text-gray-600 underline">Scheduled Date: {task.dueDate}</p>
            </>
                )}
                <div className="flex justify-end space-x-2 mt-4">
            <button
              className={`text-white bg-blue-800 rounded-2xl w-16 hover:text-blue-800 ${isEdit ? 'hidden' : 'block'}`}
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className={`text-white bg-green-800 rounded-2xl w-16 hover:text-red-800 ${isEdit ? 'block' : 'hidden'}`}
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="text-white bg-red-800 rounded-2xl w-16 hover:text-red-800"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
            </div>
        )}
    </Draggable>
  );
};

export default Card
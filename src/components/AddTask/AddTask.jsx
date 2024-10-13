import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = ({onAdd, OnClose}) => {
    const [title,setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState(null);
    const [estimatedTime, setEstimatedTime] = React.useState('');
    const [dueDate, setDueDate] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
          id: Date.now(),
          title,
          description,
          image,
          estimatedTime,
          dueDate: dueDate ? dueDate.toISOString().split('T')[0] : null,
          status: 'todo',
        };
        onAdd(newTask);
        setTitle('');
        setDescription('');
        setImage(null);
        setEstimatedTime('');
        setDueDate(null);
        
      };
    
      const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
      };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-75" // Full-screen overlay
    >
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded mb-4 w-full"
            onChange={handleImageChange}
          />
          {image && (
            <img
              src={image}
              alt="Task Preview"
              className="mb-4 w-full h-auto rounded"
            />
          )}
          <input
            type="text"
            placeholder="Estimated Time (e.g., 2 hours)"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            value={estimatedTime}
            onChange={(e) => setEstimatedTime(e.target.value)}
            required
          />
          <label className="block mb-2">Due Date:</label>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            dateFormat="yyyy/MM/dd"
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-purple-300 text-white px-4 py-2 rounded"
              
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-300 text-white px-4 py-2 rounded"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask
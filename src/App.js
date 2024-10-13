import Sidebar from './components/Sidebar/Sidebar';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';
import Dashboard from './components/Dashboard/Dashboard';
import AddTask from './components/AddTask/AddTask';

function App() {
  const dispatch = useDispatch();
  const [popupOpen, setPopupOpen] = React.useState(false);
  React.useEffect (() => {}, [dispatch]);
  const handleAdd = (newTask) => {
    dispatch(addTask(newTask));
    setPopupOpen(false);
  };
  return (
    <div className="flex">
      <Sidebar onAdd={handleAdd}/> 
      <div className='flex-1 p-6 '>
          <h1 className='text-3xl font-bold mb-6'>LamoHive Dashboard</h1>
          <button onClick={() => setPopupOpen(true)} className='bg-yellow-300 text-white px-4 py-2 rounded-lg mb-6 ' >
            Add Task
          </button>
          <Dashboard />
          {popupOpen && (
            <AddTask
            onAdd={handleAdd}
            OnClose={() => setPopupOpen(false)}
            />
          )}
      </div>
    </div>
  );
}

export default App;

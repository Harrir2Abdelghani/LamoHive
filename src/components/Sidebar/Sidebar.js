import React from 'react'
import logo from '../../Assets/logo.jpg'
import AddTask from '../AddTask/AddTask';
const Sidebar = ({onAdd}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [popupOpen, setPopupOpen] = React.useState(false);
    const handleAdd = () =>{
        setPopupOpen(true)
    };
  return (
    <div className='flex'>
        <div className={`w-64 h-screen bg-black text-white p-6 sm:block ${isOpen ? 'block' : 'hidden'} sm:h-auto transition-all duration-300 ease-in-out`}>
            <div className='flex items-center justify-center mb-8'>
                <img src={logo} alt='logo' className='h-20 w-20 rounded-2xl' />
            </div>
            <h2 className='text-3xl font-bold mb-8 text-center textyellow-300'>
                LamoHive
            </h2>
            <ul className='space-y-4'>
                <li className='cursor-pointer hover:bg-purple-300 hover:text-black p-3 rounded-lg transition-colors duration-200'>
                    Dashboard
                </li>
                <li onClick={handleAdd} className='cursor-pointer hover:bg-purple-300 hover:text-black p-3 rounded-lg transition-colors duration-200'>
                    Add Task
                </li>
                <li className='cursor-pointer hover:bg-purple-300 hover:text-black p-3 rounded-lg transition-colors duration-200'>
                    Profile
                </li>
                <li className='cursor-pointer hover:bg-purple-300 hover:text-black p-3 rounded-lg transition-colors duration-200'>
                    Settings
                </li>
            </ul>
            <button className="mt-40 w-full bg-yellow-300 text-black py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-200">
          Logout
        </button>
        </div>
        <div className="p-4 sm:hidden">
        <button
          className="text-white bg-black p-2 rounded-md focus:outline-none transition-transform transform hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '❎' : '☰'}
        </button>
      </div>
      {popupOpen && (
        <AddTask
          onAdd={onAdd} 
          onClose={() => setPopupOpen(false)} 
        />
      )}
    </div>
  )
}

export default Sidebar
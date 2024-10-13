import React from 'react'
import { DragDropContext} from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { moveTask,setTasks } from '../../redux/taskSlice';
import TaskColumn from '../TaskColumn/TaskColumn'
const Dashboard = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const groupe = {
        todo : tasks.filter((task) => task.status === 'todo'),
        doing : tasks.filter((task) => task.status === 'doing'),
        done : tasks.filter((task) => task.status === 'done'),
    };
    const onDragFinish = (result) => {
        const {source, destination, draggableId} = result;
        if (!destination) return;
        if (source.droppableId === destination.droppableId) return;
    dispatch(
      moveTask({
        taskId: parseInt(draggableId),
        destination: destination.droppableId,
      })
    );
    };
    React.useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
          dispatch(setTasks(savedTasks));
        }
      }, [dispatch]);
      React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
      const onDelete = (taskId) => {
        const filteredTasks = tasks.filter((task) => task.id !== taskId);
        dispatch(setTasks(filteredTasks)); 
      };
      const onEdit = (updatedTask) => {
        const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
        dispatch(setTasks(updatedTasks));
      };
    return (
    <DragDropContext onDragEnd={onDragFinish} >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center h-full overflow-y-auto'>
        <TaskColumn
          className="text-yellow-200"
          title="To Do 📌"
          tasks={groupe.todo}
          columnId="todo"
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <TaskColumn
          title="Doing ⏳"
          tasks={groupe.doing}
          columnId="inProgress"
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <TaskColumn
          title="Done ✔️ "
          tasks={groupe.done}
          columnId="done"
          onEdit={onEdit}
          onDelete={onDelete}
        />
        </div>
    </DragDropContext>
  );
};

export default Dashboard
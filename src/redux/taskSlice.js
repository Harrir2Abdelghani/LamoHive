import { createSlice } from '@reduxjs/toolkit';
const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    moveTask: (state, action) => {
      const { taskId, destination } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].status = destination;
      }
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});
export const { setTasks, moveTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;
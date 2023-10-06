import React from 'react'

import AddTaskInput from './AddTaskInput'
import List from './List'
import useTasks from './useTasks'

// task: id, label, completed

export default function TaskManager() {
  const {tasks, onAddTask, onDeleteTask, onTaskComplete} = useTasks()

  return (
    <div>
      <h3>TaskManager</h3>
      <AddTaskInput onAddTask={onAddTask} />
      <List
        tasks={tasks}
        onTaskComplete={onTaskComplete}
        onDeleteTask={onDeleteTask}
      />
    </div>
  )
}

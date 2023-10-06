import React, {useState} from 'react'

export default function useTasks() {
  const [tasks, setTasks] = useState([])

  const onAddTask = (label) => {
    if (!label) return
    setTasks((tasks) => [
      ...tasks,
      {
        id: Math.random(),
        label,
        completed: false,
      },
    ])
  }

  const onTaskComplete = (taskId) => {
    setTasks((tasks) =>
      tasks.map((i) => {
        if (i.id === taskId) {
          return {
            ...i,
            completed: true,
          }
        }

        return i
      }),
    )
  }

  const onDeleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((i) => i.id !== taskId))
  }
  return {
    tasks,
    onAddTask,
    onDeleteTask,
    onTaskComplete,
  }
}

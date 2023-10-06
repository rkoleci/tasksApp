import React, {useState} from 'react'
import useTasks from './useTasks'

export default function AddTaskInput({onAddTask}) {
  const [currentTask, setCurrentTask] = useState('')

  const onChangeTaskName = (e) => {
    setCurrentTask(e.target.value)
  }

  const onSubmit = () => {
    onAddTask(currentTask)
    setCurrentTask('')
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <input
        value={currentTask}
        placeholder="Add a new task..."
        onChange={onChangeTaskName}
      />
      <button type="Submit" onClick={onSubmit}>
        Add
      </button>
    </div>
  )
}

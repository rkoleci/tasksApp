import React from 'react'

export default function ListRow({
  id,
  completed,
  label,
  onTaskComplete,
  onDeleteTask,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        borderBottom: '1px solid #CCC',
        background: completed ? '#eee' : 'aqua',
      }}
    >
      <h5
        style={{
          textDecoration: completed ? 'line-through' : '',
        }}
      >
        {label}
      </h5>
      <p
        style={{
          fontSize: 16,
          color: completed ? 'green' : 'blue',
        }}
      >
        {String(completed)}
      </p>
      {!completed && (
        <button onClick={() => onTaskComplete(id)}>Mark as Complete</button>
      )}
      <button onClick={() => onDeleteTask(id)}>Delete Task</button>
    </div>
  )
}

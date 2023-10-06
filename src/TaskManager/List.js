import React from 'react'
import ListRow from './ListRow'

export default function List({tasks, onTaskComplete, onDeleteTask}) {
  return (
    <div>
      <h4>{`My Tasks ${tasks.length ? `(${tasks.length})` : ''}`}</h4>
      {tasks.map((item) => (
        <ListRow
          {...item}
          key={item.id}
          onTaskComplete={onTaskComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}

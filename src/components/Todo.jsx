import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleCompleted, deleteTodo, editTodo}) => {


  return (
    <div key={task.id} className='todo'>
    <p className={`${task.isCompleted ? "todo__completed" : "todo__notCompleted"}`} onClick={() => toggleCompleted(task.id)}>{task.task}</p>
    <div className='todo__list-item'>
      <FontAwesomeIcon className='todo__icon' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
      <FontAwesomeIcon className='todo__icon' icon={faTrash} onClick={() => deleteTodo(task.id)}/>
    </div>
  </div>)
}

export default Todo

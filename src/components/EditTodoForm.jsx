import React from 'react'


const TodoForm = ({editTodo, task}) => {
  const [value, setValue] = React.useState(task.task);

  const handleEdit = (e) => {
    e.preventDefault();
    
    if (value !== '') {
      editTodo(value, task.id);
      console.log(e.target.value);
    }
    setValue('');
  }

  return (
    <form className='todo-form-edit' onSubmit={handleEdit}>
      <input onChange={(e) => setValue(e.target.value)} value={value} className='todo-form-edit__input' placeholder='Изменить задачу на сегодня ?'/>
      <button type='submit' className='todo-form-edit__button'><span>Изменить</span></button>
    </form>
  )
}



export default TodoForm

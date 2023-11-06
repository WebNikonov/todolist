import React from 'react'


const TodoForm = ({addTodo}) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== '') {
      addTodo(value);
    }
    setValue('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input onChange={(e) => setValue(e.target.value)} value={value} className='todo-form__input' placeholder='Добавить задачу на сегодня ?'/>
      <button onClick={handleSubmit} className='todo-form__button'><span>Добавить</span></button>
    </form>
  )
}

export default TodoForm

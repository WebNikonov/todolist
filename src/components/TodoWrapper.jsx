import React, { useCallback} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = React.useState([]);
  
  const addTodo = useCallback((todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, isEdit: false, isCompleted: false }]);
    console.log('addTodo');
  }, [todos]);


  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
    }))
  }

  const deleteTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    let edited = todos.map((todo) =>
      todo.id === id ? { ...todo, isEdit: !todo.isEditing } : todo
  )
    setTodos(edited);
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEdit: !todo.isEdit } : todo
      )
    );
  };


  return (
    <div className='content'>
    <h1 className='todo-form__title'>У тебя всё получится!</h1>
      <TodoForm addTodo = {addTodo} />
      {todos.map((todo, index) => {
        return todo.isEdit ?
        <EditTodoForm editTodo = {editTask} task={todo} />
        : 
        <Todo 
        task={todo}
        key={index}
        toggleCompleted={toggleCompleted}
        editTodo = {editTodo}
        deleteTodo={deleteTodo}
        />
        
      })}
    </div>

  )
}

export default TodoWrapper

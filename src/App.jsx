import React from 'react';
import './scss/app.scss';
import TodoWrapper from './components/TodoWrapper';

function App() {
  return (
    <div className='container'>
      <div className='todoWrapper'>
        <TodoWrapper />
      </div>
    </div>


  );
}

export default App;

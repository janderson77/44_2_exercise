import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

function App() {
  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch();
  const addTodo = (newTodo) => dispatch({type: 'ADD-TODO', todo: newTodo})
  const removeTodo = (id) => {
    dispatch({type: "REMOVE-TODO", id})
  }

  const todoTemplate = todos.map(t => (
    <Todo 
      key={t.id}
      removeTodo={() => removeTodo(t.id)}
      todoText={t.todoText}
    />
  ))

  return (
    <div className="App">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Todos</h1>
        <NewTodoForm addTodo={addTodo} />
        <div className="col-md-8 offset-md-2">
          {todoTemplate}
        </div>
      </div>
    </div>
  );
}

export default App;

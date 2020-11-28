import React from 'react'

const Todo = ({removeTodo, todoText, id}) => {
    const handleRemoveTodo = () => {
        removeTodo(id)
    }
    return(
        <div id={id} className="Todo">
            {todoText}
            <button 
                id="Todo-removeBtn" 
                className="btn btn-danger"
                onClick={handleRemoveTodo}
            >Done!</button>
        </div>
    )
}

export default Todo
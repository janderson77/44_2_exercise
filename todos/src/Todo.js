import React from 'react'

const Todo = ({removeTodo, todoText, id}) => {
    const handleRemoveTodo = () => {
        removeTodo(id)
    }
    return(
        <div id={id} className="Todo">
            <p data-testid="Todo-text" className="Todo-text">{todoText}
            <button 
                id="Todo-removeBtn" 
                className="btn btn-danger"
                onClick={handleRemoveTodo}
            >Done!</button></p>
        </div>
    )
}

export default Todo
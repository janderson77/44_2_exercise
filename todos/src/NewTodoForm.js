import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const NewTodoForm = ({addTodo}) => {
    const [formData, setFormData] = useState({
        todoText: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    
    const addNewTodo = (e) => {
        e.preventDefault();
        addTodo({...formData, id: uuid()});
        setFormData({
            todoText: ''
        })
    }
    
    return(
        <div>
                <form onSubmit={addNewTodo}>
                    <div className="form-group">
                        <label>Todo Text</label>
                        <input 
                            name="todoText"
                            className="form-control"
                            value={formData.todoText}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onSubmit={addNewTodo}
                    >Submit</button>
                </form>
            </div>
    )
}



export default NewTodoForm
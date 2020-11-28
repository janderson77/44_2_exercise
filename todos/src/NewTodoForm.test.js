import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm'

let todoForm;

describe('NewTodoForm basics', () => {
    beforeEach(() => {
        todoForm = render(<NewTodoForm/>)
    })

    it('renders without crashing', () => {
        expect(todoForm).toBeTruthy()
    })
    it('matches snapshot', () => {
        expect(todoForm.asFragment()).toMatchSnapshot()
    })
})

it('updates state with todoText input', () => {
    const mock = jest.fn()
    const {getByText} = render(<NewTodoForm addTodo={mock} />)

    fireEvent.click(getByText("Submit"))

    expect(mock).toHaveBeenCalled()
})
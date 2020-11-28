import React from 'react';
import { render } from '@testing-library/react';
import {within} from '@testing-library/dom'
import Todo from './Todo'

let todo;
beforeEach(() => {
    todo = render(
        <Todo 
            todoText="This is a todo"
        />
    )
})

it('renders without crashing', () => {
    expect(todo).not.toBeNull()
})

it('matches snapshot', () => {
    expect(todo.asFragment()).toMatchSnapshot()
})

it('uses todoText prop to add appropriate text', () => {
    const todoText = todo.getByTestId('Todo-text')

    const {getByText} = within(todoText)
    const text = getByText('This is a todo')

    expect(text).toBeInTheDocument()
    expect
})
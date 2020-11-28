import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

test('renders the app', () => {
  const {getByText} = render(<Provider store={store}><App /></Provider>)
  const linkElement = getByText(/Todos/i)
  expect(linkElement).toBeInTheDocument
});

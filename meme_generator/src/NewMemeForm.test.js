import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewMemeForm from "./NewMemeForm";

let memeForm;

describe('NewMemeForm basic stuff', () => {
    beforeEach(() => {
        memeForm = render(<NewMemeForm />)
    })

    it('renders without crashing', () => {
        expect(memeForm).toBeTruthy()
    })
    it('matches snapshot', () => {
        expect(memeForm.asFragment()).toMatchSnapshot()
    })
})

it('updates state with topText input', () => {
    const mock = jest.fn()
    const {getByText} = render(<NewMemeForm addMeme={mock} />)

    fireEvent.click(getByText('Submit'))

    expect(mock).toHaveBeenCalled()
})
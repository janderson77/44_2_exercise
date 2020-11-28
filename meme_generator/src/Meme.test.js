import React from 'react';
import { render } from '@testing-library/react';
import Meme from './Meme';

let meme;
beforeEach(() => {
    meme = render(
        <Meme 
            url="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"
            topText="Wow, such meme"
            bottomText="Much funny. Very wow"
        />
    )
})

it('renders without crashing', () => {
    expect(meme).not.toBeNull();
})

it('matches snapshot', () => {
    expect(meme.asFragment()).toMatchSnapshot()
})

it('puts uses url prop for image src', () => {
    const img = meme.getByAltText("meme");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png')
})
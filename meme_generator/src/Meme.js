import React from 'react'
import './Meme.css'

const Meme = ({removeMeme, topText, bottomText, url, id}) => {
    const handleRemoveMeme = () => {
        removeMeme(id)
    }
    return (
        <div id={id} className="Meme-container">
            <span className="top-text">{topText}</span>
            <img src={url} alt="meme" className="Meme" />
            <span className="bottom-text">{bottomText}</span>
            <button id="meme_removeBtn" onClick={handleRemoveMeme}>X</button>
        </div>
    )
}

export default Meme
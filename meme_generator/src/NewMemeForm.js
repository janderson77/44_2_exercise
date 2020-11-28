import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const NewMemeForm = ({addMeme}) => {
    const [fields, setFields] = useState({
        topText: '',
        bottomText: '',
        url: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFields(fields => ({
            ...fields,
            [name]: value
        }));
    };

    const makeMeme = (e) => {
        e.preventDefault();
        addMeme({...fields, id: uuid()});
        setFields({
            topText: '',
            bottomText: '',
            url: ''
        })
    }

    return(
        <div>
            <form onSubmit={makeMeme}>
                <div className="form-group">
                    <label>Top Text</label>
                    <input 
                        name="topText"
                        className="form-control"
                        value={fields.topText}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Bottom Text</label>
                    <input 
                        name="bottomText"
                        className="form-control"
                        value={fields.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input 
                        name="url"
                        className="form-control"
                        value={fields.url}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={makeMeme}
                >Submit</button>
            </form>
        </div>
        
    )
}

export default NewMemeForm
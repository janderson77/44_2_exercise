import './App.css';
import Meme from './Meme'
import {useSelector, useDispatch} from 'react-redux'
import NewMemeForm from './NewMemeForm'

function App() {
  const memes = useSelector(store => store.memes)
  const dispatch = useDispatch();
  const addMeme = (newMeme) => dispatch({type: 'ADDMEME', meme: newMeme})
  const removeMeme = (id) => {
    dispatch({type: "REMOVEMEME", id})
  }

  const memeReserve = memes.map(m => (
    <Meme 
      key={m.id}
      removeMeme={() => removeMeme(m.id)}
      topText={m.topText}
      bottomText={m.bottomText}
      url={m.url}
    />
  ))

  return (
    <div className="App">
      <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Meme Generator</h1>
          <NewMemeForm addMeme={addMeme} />
          <div className="col-md-8 offset-md-2">
              {memeReserve}
          </div>
      </div>
    </div>
  );
}

export default App;

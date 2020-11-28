const INITIAL_STATE = {memes: []};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADDMEME':
            return {...state, memes: [...state.memes, {...action.meme}]}
        case "REMOVEMEME":
            return {...state, memes: state.memes.filter(meme => meme.id !== action.id)}
        default:
            return state;
    }
    
}

export default rootReducer;
import  { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {title: 'throne', duration: '3.08'},
        {title: 'drown', duration: '3.40'},
        {title: 'BFG division', duration:'8.09'},
        {title: 'Victorious', duration:'3.34'},
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

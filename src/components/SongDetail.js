import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    if(!props.song){
        return <div>Select a Song</div>
    }
    return(
        <div>
        <h3>Details for :</h3>
        <br />
        <p>Title: {props.song.title}
        <br /> 
        Duration: {props.song.duration}</p>
          
        </div>
    )
};

const MapStateToProps= (state) => {
    return {song: state.selectedSong};
}


export default connect(MapStateToProps)(SongDetail);

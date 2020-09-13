import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions/index';

class Songlist extends React.Component {
    renderList() {
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        onClick={()=> this.props.selectSong(song)}
                        className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    render(){
        
        return <div className='ui divided list'> {this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {    //take all data in store(state), do calculation. Asks store for some info
     
     return { songs: state.songs };
}

export default connect(mapStateToProps, { //we pass selectSong here to tell redux that selectSong is action Creator
    selectSong: selectSong,  //pass selectSong from action creator to songlist as props
})(Songlist);
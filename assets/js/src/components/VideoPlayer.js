import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";


class VideoPlayer extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    render() {
        const loading = this.state.loading;
        return (
            <Player>
                <source src="http://localhost:8000/movies/Watchmen-ep-01.mkv" />
          </Player>
            )
    }
}
export default VideoPlayer;

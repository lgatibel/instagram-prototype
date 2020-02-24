import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';

class Menu extends Component {
    constructor() {
        super();
        this.state = { loading: true };
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
                <h1>HOME</h1>
                <VideoPlayer>
                    
                </VideoPlayer>
            </div>
        )
    }
}
export default Menu;


import React, {Component} from 'react';
import {PlayerWrapper, PlayerInner} from '../Theme';

export default class Player extends Component{

    render() {
        const videoStyle ={
            width: 640,
            height: 360,
            background: '#000'
        }
        return (
            <PlayerWrapper>Player
                <PlayerInner>
                    <video style={videoStyle}ref={(player) => this.player = player} autoPlay />
                    </PlayerInner>
            </PlayerWrapper>
        )
    }
}
import React, {Component} from 'react';
import {PlayerWrapper, PlayerInner, VideoTitle, VideoButtonTitle} from '../Theme';
import Hls from 'hls.js';

export default class Player extends Component{

    componentDidMount(){
        if(Hls.isSupported() && this.player) {
            const streamUrl = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
            const video = this.player;

            video.addEventListener('contextmenu', (e)=> {
                e.preventDefault();
                return false;
            })

            const hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function(){
                video.play();
            })

        }
    }

    _onTouchInsidePlayer(){
        this.player.paused ? this.player.play() : this.player.pause()
    }

    render() {
        const videoStyle ={
            width: 640,
            height: 360,
            background: '#000'
        }
        return (
            <PlayerWrapper>
                <PlayerInner>
                    <video style={videoStyle} onClick={()=> this._onTouchInsidePlayer()} ref={(player) => this.player = player} autoPlay/>
                    </PlayerInner>
                    <VideoTitle><VideoButtonTitle>Live</VideoButtonTitle>Test Live Video Stream</VideoTitle>
            </PlayerWrapper>
        )
    }
}
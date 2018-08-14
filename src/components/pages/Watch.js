import React, {Component} from 'react';
import {LiveWrapper, LiveVideo} from '../Theme';
import Player from './Player';


export default class Watch extends Component {

    render() {
        return(
           <LiveWrapper>
               <LiveVideo>
               <Player />
               </LiveVideo>
            </LiveWrapper> 
        )
        
    }
}
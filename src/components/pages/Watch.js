import React, {Component} from 'react';
import {LiveWrapper} from '../Theme';
import Player from './Player';


export default class Watch extends Component {

    render() {
        return(
           <LiveWrapper>
               <Player />
               <h2>Watch Component Works!</h2>
            </LiveWrapper> 
        )
        
    }
}
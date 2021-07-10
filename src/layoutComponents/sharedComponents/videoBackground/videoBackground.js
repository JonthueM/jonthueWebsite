import React from 'react';
import video from './videoBackgroundAssets/video.mp4'
import './videoBackgroundStyles/videoBackground.css';

const videoBackgroound = ({children}) =>{
    return(
    <div>
        <div className="content">
                {children}
        </div>
        <div id="content">

        </div>
        <div id="outer">
                <div id="home-top-video">
                    <video autoplay loop muted width="100%">
                        <source src={video} />
                    </video>
                </div>
        </div>
    </div>
);
}
export default videoBackgroound;
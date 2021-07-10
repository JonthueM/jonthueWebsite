import React from 'react';
import IndicatorBar from '../sharedComponents/indicatorBar/pieceIndicatorBar.js';
import R2 from '../sharedComponents/R2/pieceR2.js';
import SectionNav from '../sharedComponents/SectionNav/pieceSectionNav.js';
import VideoBackground from '../sharedComponents/videoBackground/videoBackground.js';

const layout = (props) =>{
    return(
    <div>
        <VideoBackground>
            <IndicatorBar/>
            <R2 />
            {props.children}
            <SectionNav />
        </VideoBackground>
    </div>
);
}
export default layout;
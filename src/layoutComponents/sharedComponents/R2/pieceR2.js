import React from 'react';
import dial from './R2Assets/dial.svg';
import home from './R2Assets/home.svg';
import leftTriangle from './R2Assets/TriangleArrow-Left.svg';
import rightTriangle from './R2Assets/TriangleArrow-Right.svg';
import styled from "styled-components";

const Vspot = styled.div`
    position: fixed;
    z-index: 2;
    width: 100vw;
    top: 45%;
`;
const Oneline = styled.div`
    display: flex;
    align-content: center;
    justify-content:space-between; 
    margin: auto 0;
    padding: auto 0;
    height: 100%; 
`;
const FlexIT = styled.div`
    height: 200%;
    display: flex;
    align-items: center !important;
`;

const LeftNav = styled.div`
    width: 231px;    
`;
const RightNav = styled.div`
`;
const Triangle = styled.img`
    width: 110px;
    height: 130px;
    z-index: 2;
`;
const LeftTriangle = styled(Triangle)`
    z-index: 1;
`;

const SVGcontainter = styled.div`

`;


function R2(){
    return(
        <Vspot>
            <Oneline>
                <FlexIT>
                    <LeftNav>
                        <LeftTriangle src={leftTriangle} />
                        <SVGcontainter>
                            <a href="/">
                                <img src={home} />
                            </a>
                        </SVGcontainter>
                    </LeftNav>
                </FlexIT>
                <FlexIT>
                    <FlexIT>
                        <RightNav>
                            <Triangle src={rightTriangle} />
                            <SVGcontainter>
                                <a href="/">
                                    <img src={dial} class="dialSVG mainNavItem" />
                                </a>
                            </SVGcontainter>
                        </RightNav>
                    </FlexIT>
                </FlexIT>
            </Oneline>
        </Vspot>
    );
}
export default R2;
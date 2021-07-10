import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import ResumeLinks from './Links/ResumeLinks';
import ServiceLinks from './Links/SerivcesLinks';
import Logo from './../../../Pages/sharedAssets/loadingAssets/logo.svg';


const Section = styled.div`
    background-color: transparent; 
    position: fixed; 
    bottom: 0; 
    padding: 20px 10px; 
    padding-bottom: 35px; 
    width: 100vw; 
    z-index: 20;
`;

const Img = styled.img`
    height: 50px;
`;
const LogoPosition = styled.div`
    position: fixed;
    right: 60px;
    bottom: 20px;

`;
const SectionDisplay = styled.div``;

const QuoteDisplay = styled.div``;

function SectionNav(){
    const Location = window.location.href;
    const Service = Location.match("/service/i");
    const Resume = Location.match("/resume/i");
   

    return(
        <Section>
            <div id="Location">
            if
                (!{Service} &&  {Resume}){
                    <React.Fragment>
                     <QuoteDisplay>
                       Expectional People Learn that doing their best is all they can do. - Wes Fesler
                      </QuoteDisplay> 
                    </React.Fragment>
                       
                }
            else{
                
 


        <SectionDisplay>
                        <div>
                            <ul>
                                if ({Service}){
                                    <React.Fragment>
                                        <ServiceLinks />
                                    </React.Fragment>
                                    
                                }
                                else{
                                   
                                   <React.Fragment>
                                       <ResumeLinks />
                                   </React.Fragment>
                                }
                                </ul>
                            </div>
                            <div></div>
                            <LogoPosition>
                                
                                    <Link to="/"><Img src={Logo}/></Link>
                                
                            </LogoPosition>
                        </SectionDisplay>
                }
    
                
               
            </div>   
        </Section>
    )
}
export default SectionNav
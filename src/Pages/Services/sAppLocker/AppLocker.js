import React from 'react';
import styled from "styled-components";
import {H2} from "../../../layoutComponents/sharedComponents/styledElements/H2";
import PageLayout from '../../../layoutComponents/pageLayout/pageLayout.js';
import {primaryButton} from "../../../layoutComponents/sharedComponents/styledElements/primaryButton.js";

const Button = styled(primaryButton)`
margin-left: 140px;
`;

class sAppLocker extends React.Component {
    render(){
        return(
            <div>
            <PageLayout>
                <H2>Description </H2>
            <p>Here is a app locker that is made to showcase  mobile applications that I hadd desiged <br/>
            and built from scratcth.  Demostrating not only the ability to provide <br /> 
           a mobile and desktop solution for your busines. </p>
            <H2>Apps:</H2>
            <ul>
                <li>12 Days to Wholeness Journey</li>
                <li>A Mindful Moment</li>
                <li>Call the Professionals</li>
                <li>GYC Atlantic</li>
            </ul>
            <Button>Check It Out!</Button>
            </PageLayout>
            
        </div>
        );
        
    }
}
export default sAppLocker;
import React from 'react';
import {ListItems }from './ListItems';
import { Link } from 'react-router-dom';


function ResumeLinks(){
    return(
    <React.Fragment>
        <ListItems><Link to="/resume/home">Home</Link></ListItems>
        <ListItems><Link to="/resume/about">About</Link></ListItems>
        <ListItems><Link to="/resume/resume">Resume</Link></ListItems>
        <ListItems><Link to="/resume/projects">Projects</Link></ListItems>
        <ListItems><Link To="/resume/applocker">AppLocker</Link></ListItems>
        <ListItems><Link To="/resume/github">Github</Link></ListItems>
        <ListItems><Link To="/resume/contact">Contact</Link></ListItems>
    </React.Fragment>
    );
};

export default ResumeLinks;
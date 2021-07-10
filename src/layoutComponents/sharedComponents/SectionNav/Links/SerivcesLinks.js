import React from 'react';
import { Link } from 'react-router-dom';
import {ListItems} from './ListItems';


function ServicesLinks(){
    return(
    <React.Fragment>
        <ListItems><Link to="/services/home">Home</Link></ListItems>
        <ListItems><Link to="/services/about">About</Link></ListItems>
        <ListItems><Link to="/services/services">Services</Link></ListItems>
        <ListItems><Link to="/services/portfolio">Portfolio</Link></ListItems>
        <ListItems><Link to="/services/applocker">AppLocker</Link></ListItems>
        <ListItems><Link to="/services/start">Start</Link></ListItems>
        <ListItems><Link to="/services/contact">Contact</Link></ListItems>
    </React.Fragment>
    );
};

export default ServicesLinks;
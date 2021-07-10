import React from 'react';
import styled from "styled-components";

const ListStyles = styled.li`
    list-style: none; 
    float: left;    
    margin: 4px 20.5px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
`;
export const ListItems =({children})  =>{
    return <ListStyles>{children}</ListStyles>
};
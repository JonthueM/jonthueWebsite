import React from 'react';
import {InputType} from '../../../layoutComponents/sharedComponents/styledElements/input';
import PageLayout from '../../../layoutComponents/pageLayout/pageLayout.js';
import {textArea} from '../../../layoutComponents/sharedComponents/styledElements/textArea';
import { primaryButton } from '../../../layoutComponents/sharedComponents/styledElements/primaryButton';
import styled from 'styled-components';

const Name = styled(InputType).attrs(props =>({
    type: "text",
    placeholder: "Name"
}));

const Email = styled(InputType).attrs({
    type: "email",
    placeholder: "Email"
});

const LeftSideButton = styled(primaryButton)`
    margin-left: 12%;
`;
class rContact extends React.Component{
    render(){
        return(
            <div>
            <PageLayout>
                <Name />
                <Email />
                <textArea />
                <LeftSideButton src="/"/>
            </PageLayout>
        </div>
        );
       
    }
}
export default rContact;
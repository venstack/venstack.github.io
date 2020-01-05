import React from 'react';
import { Container } from 'reactstrap';
import JumboContainer from './JumboContainer'
import {android,iOS,aiml,web,publications} from './data'

export default function Projects() {
    return (
        <Container fluid="true">
            <h1 className = "text-center">Publications & Projects</h1>
            <JumboContainer heading = {'Publications'} data = {publications}/>
            <JumboContainer heading={'Web'} data={web}/>
            <JumboContainer heading={'Artificial Intelligence and Machine Learning'} data={aiml}/>
            <JumboContainer heading={'android'} data={android}/>
            <JumboContainer heading={'iOS'} data={iOS}/>
        </Container>

    );
}
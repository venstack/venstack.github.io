import React from 'react'
import { Jumbotron } from 'reactstrap'
import ImagelessMedia from './ImagelessMedia'
import ImagefulMedia from './ImagefulMedia'
export default function JumboContainer(props) {

    let data = props.data   
    return(
        <Jumbotron className ="bg-dark text-white">
            <h3>{props.heading}</h3>
            {
                data.map((project,index) => {
                    if(project.img === null || project.img === undefined){
                        return <ImagelessMedia key={index} data = {project}/>
                    }
                    else 
                        return<ImagefulMedia key ={index} data = {project} />
                })
            }
        </Jumbotron>
    );
}
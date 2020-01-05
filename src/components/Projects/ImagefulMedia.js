import React from 'react'
import { Jumbotron, Media } from 'reactstrap';

export default function ImagefulMedia(props){
    let data = props.data
    return(
        <Jumbotron className="text-dark">
            <h4 className="mb-2">{data.name}</h4>
            <Media>
                <Media left href= {data.url} target = "_blank">
                <img src= {data.img} width="80px" height= "80px" alt={data.name}/>
                </Media>
                <Media className="ml-2" body>
                    {data.description}
                </Media>
            </Media>
            <a href={data.url} target="_blank">See Project</a>
        </Jumbotron>
    );
}
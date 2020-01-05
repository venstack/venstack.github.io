import { Jumbotron } from "reactstrap";
import React from 'react'
export default function ImagelessMedia(props) {
    let data = props.data
return(
    <Jumbotron className="text-dark">
    <h5>{data.name}</h5>
    {
        (data.conference !== undefined)?  <p>{data.conference}</p>: ''
    }
    <p className="text-justify">{data.description}</p>
    {
        (data.url !== undefined)? <a href={data.url} target="_blank">See Project</a> : ''
    }
    </Jumbotron>
);
}
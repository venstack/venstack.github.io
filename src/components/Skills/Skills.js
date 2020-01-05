import React from 'react'
import {Jumbotron,
    Container,
    Row,Card, 
    CardImg, 
    CardBody,
    Col} from 'reactstrap'
import {backEnd,frontEnd,mobile,frameworks,devops,languages,additionalSkills} from './data';
export default function Skills() {
   
return( <Container fluid="true">
    <h1 className="page-header my-1 text-center">Technologies</h1>
    <Jumbotron className="bg-dark">
    <h2 className="text-white">Back-end</h2>
        <Row>
            {
                backEnd.map((product) => {
                    return(
                        <Col md="2" lg="2" sm ="4" xl="2" xs = "6" className = "my-1">
                            <Card>
                                <CardImg top width="100%" height="120px"src = {product.img} alt="Card Image Cap" />
                                <CardBody className="text-center">{product.technology}</CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </Jumbotron>
    <Jumbotron className="bg-info">
        <h2 className="text-white">Front-end</h2>
        <Row>
            {
                frontEnd.map((product) => {
                    return(
                        <Col md="2" lg="2" sm ="4" xl="2" xs = "6" className = "my-1">
                            <Card>
                                <CardImg top width="100%" height="120px"src = {product.img} alt="Card Image Cap" />
                                <CardBody className="text-center">{product.technology}</CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </Jumbotron>
    <Jumbotron>
        <h2 className="text-dark">Services</h2> 
        <Row>
            {
                devops.map((product) => {
                    return(
                        <Col md="2" lg="2" sm ="4" xl="2" xs = "6" className = "my-1">
                            <Card>
                                <CardImg top width="100%" height="120px"src = {product.img} alt="Card Image Cap" />
                                <CardBody className="text-center">{product.technology}</CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </Jumbotron>
    <Jumbotron className="bg-secondary">
    <h2 className="text-white">Frameworks & IDEs</h2>
    <Row>
            {
                frameworks.map((product) => {
                    return(
                        <Col md="2" lg="2" sm ="4" xl="2" xs = "6" className = "my-1">
                            <Card>
                                <CardImg top width="100%" height="120px"src = {product.img} alt="Card Image Cap" />
                                <CardBody className="text-center">{product.technology}</CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </Jumbotron>
    <Jumbotron className="bg-primary">
    <h2 className="text-white">Mobile</h2>
    <Row>
            {
                mobile.map((product) => {
                    return(
                        <Col md="2" lg="2" sm ="4" xl="2" xs = "6" className = "my-1">
                            <Card>
                                <CardImg top width="100%" height="120px"src = {product.img} alt="Card Image Cap" />
                                <CardBody className="text-center">{product.technology}</CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </Jumbotron>
    <Jumbotron className="bg-dark">
    <h2 className="text-white">Languages</h2>
    <Row>
            {
                languages.map((product) => {
                    return(
                        <Col md="2" lg="2" sm ="4" xl="2" xs = "6" className = "my-1">
                            <Card>
                                <CardImg top width="100%" height="120px"src = {product.img} alt="Card Image Cap" />
                                <CardBody className="text-center">{product.technology}</CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </Jumbotron>
    <Jumbotron>
    <h2 className="text-dark">Additional Skills</h2> 
        <ul className="text-justify">
            {
                additionalSkills.map((skill) => {
                    return(
                        <li>{skill}</li>
                    );
                })
            }
        </ul>
    </Jumbotron>

</Container>
);
}
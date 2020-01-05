import React from 'react';
import './cv.css'
import {Jumbotron,Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import {personalInfo,professionalSummary,workHistory,education,accomplishments} from './data'
export default function CV() {
    return (
        <Container fluid = {true}>
            <h1 className="page-header my-1 text-center">My CV</h1>
            <Jumbotron className="mt-2">
                <h2 className="text-center text-capitalize fancy">{personalInfo.name}</h2>
                <p className="text-center">{personalInfo.address} H: {personalInfo.Phone}</p>
                <p className="text-center">Email: {personalInfo.email}</p>
            </Jumbotron>
            <Jumbotron>
                <h2 className="text-center text-capitalize fancy">Professional Summary</h2>
                <p className = "text-justify">{professionalSummary}</p>
            </Jumbotron>
            <Jumbotron>
                <h2 className="text-center text-capitalize fancy">Work History</h2>
                {
                    workHistory.map((work) => {
                        return(
                            <Jumbotron className = "bg-dark text-white">
                                <p className="text-justify"><span className="h5">{work.designation},</span> {work.experience}</p>
                                <p className="text-justify"><span className="h5">{work.organization}</span> - {work.experience}</p>
                                <p className="text-justify">{work.description}</p>
                                <ul className="text-justify">
                                {
                                    work.points.map((point) => {
                                        return (
                                        <li>{point}</li>
                                        );
                                    })
                                }
                                </ul>
                            </Jumbotron>
                        );
                    })
                }
               
            </Jumbotron>
            <Jumbotron className="text-center text-capitalize">
                <h2 className="text-center fancy text-capitalize">Skills</h2>
                <a href="/skills" className="text-center btn bg-primary text-white">Click here to see skills</a>
            </Jumbotron>
            <Jumbotron className="text-center text-capitalize">
                <h2 className="text-center fancy text-capitalize">Projects</h2>
                <a href="/projects" className="text-center btn bg-primary text-white">Click here to see projects</a>
            </Jumbotron>
            <Jumbotron className="text-center">
                    <h2 className="text-capitalize fancy">Education</h2>
                    {
                        education.map((college) => {
                            return(
                                <div className = "text-justify">
                                    <p><span className="h5">{college.degree}:</span> {college.major}, {college.year}</p>
                                    <p><span className="h5">{college.university}</span> - {college.location}</p>
                                </div>
                            );
                        })
                    }
                    
                   
            </Jumbotron>
            <Jumbotron className="text-center">
                <h2 className="text-center text-capitalize fancy">Accomplishments</h2>
                <ul className="my-1 text-justify">
                    {
                        accomplishments.map((accom) => {
                            return(
                                <li>{accom}</li>
                            );
                        })
                    }
                </ul>
            </Jumbotron>
            <Jumbotron className="bg-secondary">
                <h2 className="text-center text-white fancywhite">Attachments</h2>
                <Row>
                    <Col sm="4" md="2" lg ="2" xs="6">
                                <a href= 'https://drive.google.com/file/d/1KvotE7vhdnHsF0e3S064wppjpLcuv_30/view?usp=sharing' target="_blank" >
                                    <span>
                                        <Card>
                                            <CardHeader>
                                                <img width="130" height="130" src={require('../../assets/images/ic_pdf.png')}  alt='Resume file'/>
                                            </CardHeader>
                                            <CardBody className="text-center">
                                                Resume.pdf
                                            </CardBody>
                                        </Card>
                                    </span>
                                </a>
                    </Col>
                    <Col sm="4" md="2" lg ="2" xs="6">
                    <a href='https://drive.google.com/open?id=1ZWx8SydxUQqZAXgSqPTwJyBuEYjGyrpu'  target="_blank">
                                    <span>
                                        <Card>
                                            <CardHeader>
                                                <img width="130" height="130" src={require('../../assets/images/ic_pdf.png')}  alt='CV file'/>
                                            </CardHeader>
                                            <CardBody className="text-center">
                                                CV.pdf
                                            </CardBody>
                                        </Card>
                                    </span>
                                </a>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}
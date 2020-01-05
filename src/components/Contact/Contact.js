import React,{useState} from 'react';
import {Container, Row, Col, Jumbotron, Alert,Modal,ModalBody,ModalFooter,ModalHeader,Button} from 'reactstrap';
import './contact.css';
import LocationMap from './LocationMap'
import {githubURL,linkedinURL}from '../../constants'
import axios from 'axios';
export default function Contact() {

    const [email,changeEmail] = useState('')
    const [name, changeName] = useState('')
    const [subject,changeSubject] = useState('')
    const [message, changeMessage] = useState('')
    const [fieldAlert,toggleAlert] = useState(false)
    const [successAlert, toggleSuccess] = useState(false)
    const toggle = () => {
        toggleSuccess(false)
    }
    const resetData = () => {
        changeEmail('')
        changeMessage('')
        changeName('')
        changeSubject('')
    }
    const sendMail = (e) => {
        e.preventDefault();
        let fields = {
            "email": email,
            "name": name,
            "subject": subject,
            "message": message
        }
        
        if (validateFields(fields)){
            axios.post('/contact',fields).then((res) =>{
                toggleSuccess(true)
                resetData()
            })
            
        }
        else
        toggleAlert(true)
        
    }
    const validateFields = (fields) => {
        if((fields.name !== '') && (fields.email !== '') && (fields.subject !== '') && (fields.message !== ''))
        return true
        else
        return false
    }
    return (
        <Container fluid = {true}>
            <Row>
                <Col sm ="12" md="6" lg="6" xs="12">
                <h1 className="text-center">Find me here</h1>
                        <LocationMap />
                </Col>
                <Col sm ="12" md="6" lg="6" xs="12">
                <h1 className="text-center">Contact me</h1>
                    <Jumbotron style={{"height": "115vh"}}>
                        <Alert color="danger" isOpen={fieldAlert}>Please enter all fields</Alert>
                        <form onSubmit={sendMail}>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" value={email} onChange= {(e) => {changeEmail(e.target.value)}} placeholder="Enter your email id"   />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"  value={name} onChange= {(e) => {changeName(e.target.value)}} className="form-control" placeholder="Enter name"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" placeholder="Enter the subject"  className="form-control" value={subject} onChange= {(e) => {changeSubject(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea   className="form-control" rows="5" placeholder="Enter your message" value={message} onChange = {(e) => {changeMessage(e.target.value)}} ></textarea>
                            </div>
                            <input type="submit" value="Send" className="btn btn-primary form-control" />
                        </form>
                            <h5 className = "text-center mt-2 fancy">Connect to me using</h5>
                            <Row className= "text-center">
                                <Col>
                                <a target="_blank" href={linkedinURL} ><span><img width="50" height="50" alt="linkedin" src= {require('../../assets/images/ic_linkedin.png')} /> </span></a>
                                <a target="_blank" href= {githubURL} ><span><img width="40" height="40" alt="github" src= {require('../../assets/images/ic_github.png')} /> </span></a>
                                </Col>
                                
                            </Row>
                        {/* <a href="https://github.com/saikrishna9874" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/venkata-maddineni-95235218/"><i className="fa fa-linkedin"></i> </a> */}
                    </Jumbotron>
                </Col>
            </Row>
            <Modal isOpen={successAlert} toggle={toggle}>
                <ModalHeader toggle={toggle}>Success</ModalHeader>
                <ModalBody>
                Thank you for contacting me. I'll get back to you ASAP
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Okay</Button>{' '}
                </ModalFooter>
            </Modal>
        </Container>
    );
} 
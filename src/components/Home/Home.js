import React from 'react';
import {Container, Jumbotron,Media} from 'reactstrap'
import {about, experience} from './data'
import myphoto from '../../assets/images/myphoto1.jpg'
import {githubURL,linkedinURL}from '../../constants'
import './home.css'
export default  function Home() {
return(
    <Container fluid= "true">
        <Jumbotron className="my-2">
             <Media>
                <Media className="mr-2" left>
                <img src= {myphoto} alt = "profile photo" />
                </Media>
                <Media className="ml-2" body>
                    <Container>
                        <Jumbotron className=" bg-white text-center personal_text">
                        <h4>Hello Everybody, My name is</h4>
                        <h4>Venkata Maddineni</h4>
                        <h4>Full-stack Developer</h4>
                        <ul className="list basic_info">
                        <li><a><i className="lnr lnr-calendar-full"></i> November 6, 1995</a></li>
                        <li><a><i className="lnr lnr-phone-handset"></i> +1 (321) 213-8740</a></li>
                        <li><a href="/contact"><i className="lnr lnr-envelope"></i> saikrishna9874@gmail.com</a></li>
                        <li><a href="/contact"><i className="lnr lnr-home"></i> 220 E University BLVD, Apt 101, Melbourne, FL</a></li>
                    </ul>
                    <ul className="list personal_social">
                        <li><a href={githubURL} target="_blank"style ={{background:"#000000"}}><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href={linkedinURL} style ={{background:"#004b7c"}}><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                        </Jumbotron>
                        
                        
                    </Container>
                </Media>
            </Media>
        </Jumbotron>
        <Jumbotron className="text-center my-2">
        <h1>About Me</h1>
        <p className="text-justify">{about}</p>
        </Jumbotron>
        <Jumbotron className="text-center my-2">
        <h1>My Experience</h1>
        <p className="text-justify">{experience}</p>
        </Jumbotron>
    </Container>
);
}
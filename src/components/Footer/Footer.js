import React from 'react'
import {Container} from 'reactstrap';
export default function Footer() {
    return(
        <footer>
            <div className="footer-copyright text-center py-3 bg-dark text-white">
                <Container fluid = {true}>
                    &copy; {new Date().getFullYear()} Copyright, JK Feel free to reuse by <a href="https://venstack.herokuapp.com">Venkata Maddineni. </a> Pictures downloaded from the Icons8 and other websources.
                </Container> 
             </div>
        </footer>
    );
}
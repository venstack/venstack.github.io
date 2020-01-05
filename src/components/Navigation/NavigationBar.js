import React,{useState} from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import  venstack_main_logo from '../../assets/images/venstack_main_logo.png'
function Navigation() {
  const [collapsed,toggleCollapse] = useState(true);

  const toggleNavbar = (e) => {
    toggleCollapse(!collapsed);
  }
return (
    <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 bg-dark" light>
            <NavbarBrand className="text-white" tag={Link} to="/"><span><img width="30" height="30" alt="nao" src={venstack_main_logo} /></span> Venstack</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-white hvrcenter" to={'/'}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-white hvrcenter" to={'/skills'}>Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-white hvrcenter" to={'/cv'}>CV</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-white hvrcenter" to={'/projects'}>Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-white hvrcenter" to={'/contact'}>Contact</NavLink>
                </NavItem>
                
              </ul>
            </Collapse>
        </Navbar>
      </header>

);
}

export default Navigation;
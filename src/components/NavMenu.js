import React, { Component } from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Media, Nav, NavbarText, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';
import { LoginComponent } from './LoginComponent';
import logo from './imgs/LivingAncestryLogo.png';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            displayProfile: false
        };
    }

    toggleNavbar () {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    displayProfileInformation = () => {
        this.setState({
            displayProfile: true
        })
    }

    render () {
        return (
            <header >
              
                
                <Navbar style={{ marginBottom: 0 }} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow " light>
                    <Container>                                     
                        <NavbarBrand className="navigationLogo" style={{ marginLeft: 0 }} href="/" >                      
                            <Media className="navigationLogo" src={logo} style={{marginRight: 0 }} alt="Living Ancestry Clock" />                                                          
                        </NavbarBrand>                                                             
                
                    <NavbarToggler   onClick={()=> this.toggleNavbar()}  />
                        <Collapse style={{ float: 'right'}} isOpen={!this.state.collapsed} navbar>
                            <Nav className="navbar-nav ml-auto" >
                            <NavItem style={{ float: 'right' }}>
                                <a style={{ float: 'right'}} href="/tree" class="button small  smooth-scroll-middle">View Example Tree</a>
                            </NavItem>
                                <NavItem style={{ float: 'right', marginTop: 2 }}>
                                <a style={{ float: 'right' }} href="/profile/allanla" class="button small  smooth-scroll-middle">View Example Time Capsule</a>
                            </NavItem>
                                <NavItem style={{ float: 'right', marginTop: 2  }}>
                                <a style={{ float: 'right' }} href="/faq" class="button small  smooth-scroll-middle">FAQ</a>
                                </NavItem>
                                <NavItem style={{ float: 'right', marginTop: 2 }}>
                                <a style={{ float: 'right' }} href="/mission" class="button small  smooth-scroll-middle">Mission</a>
                            </NavItem>
                        </Nav>
                       
                        </Collapse>
                        </Container>
            </Navbar>
          </header>
        );
    }
}

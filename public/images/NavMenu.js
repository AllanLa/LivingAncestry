import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Media, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';
import { LoginComponent } from './LoginComponent';
import logo from './imgs/LivingAncestryClock.png';

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
            <header>
                <Navbar style={{ marginBottom: 0 }} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow " light>
                    <Container className="container">
                    <Media className="navigationLogo" src={logo} alt="Living Ancestry Clock" />
                    <NavbarBrand tag={Link} to="/">Living Ancestry</NavbarBrand>                
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                      <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <Row>
                                <Button color="secondary" style={{ marginRight: 5 }} tag={Link} to="/profile/allanla">View Example Time Capsule</Button>
                                <Button color="secondary" tag={Link} to="/tree">View Example Family Tree</Button>
                            </Row>
                        </NavItem>
                      </ul>
                    </Collapse>
              </Container>
            </Navbar>
          </header>
        );
    }
}

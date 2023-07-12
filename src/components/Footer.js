import React, { Component } from 'react';
import { ButtonGroup, Navbar, NavbarText, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';

export class Footer extends Component {

    constructor(props) {
        super(props);
    }

    openLink(link) {
        window.open(link, '_blank');
    }

    render() {
        return (
            <footer style={{ bottom: 0, position: 'absoltue' }}>
                <Navbar style={{ bottom: 0, position: 'absoltue', maxHeight: 40 }} className="ng-white border-top" light>
                    <Row style={{justifyContent: 'space-around'}}>
                        <NavbarText><b>©2023 Living Ancestry, Inc. Please email allanlalala@gmail.com for questions or further inquiries. Follow Living Ancestry Social Media for more news and updates.</b></NavbarText>
                    <ButtonGroup>
                        <Button outline className="fab fa-facebook" color="secondary"
                                onClick={this.openLink.bind(this, "https://fb.me/LivingAncestry")} />
                        <Button outline className="fab fa-linkedin" color="secondary"
                                onClick={this.openLink.bind(this, "https://www.linkedin.com/company/47579938")} />
                        </ButtonGroup>
                    </Row>
                </Navbar>
            </footer>
        );
    }
}

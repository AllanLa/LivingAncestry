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
            <footer>
                <Navbar style={{ bottom: 0, position: 'relative', maxHeight: 100 }} className="ng-white border-top" light>
                    <Row style={{justifyContent: 'space-around'}}>
                    <NavbarText><b>Follow Living Ancestry Social Media for more news and updates. These follows will really help move this project forward. Thank you!</b></NavbarText>
                    <ButtonGroup>
                        <Button outline className="fab fa-facebook" color="secondary"
                                onClick={this.openLink.bind(this, "https://fb.me/LivingAncestry")} />
                        <Button outline className="fab fa-instagram" color="secondary"
                            onClick={this.openLink.bind(this, "https://www.instagram.com/livingancestry/")} />
                        <Button outline className="fab fa-linkedin" color="secondary"
                                onClick={this.openLink.bind(this, "https://www.linkedin.com/company/47579938")} />
                        </ButtonGroup>
                    </Row>
                    <Row>
                        <NavbarText>© 2020 Living Ancestry, Inc. Please email laallan.livingancestry@gmail.com for questions or further inquiries.</NavbarText>
                        </Row>
                </Navbar>
            </footer>
        );
    }
}

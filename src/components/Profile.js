import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardSubtitle, CardImg, Container,
    Nav, NavItem, NavLink, TabContent, TabPane,
    Button, ListGroup, ListGroupItem, Badge, Row, Col
} from 'reactstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import classnames from 'classnames';

import { TimeCapsule } from './TimeCapsule';

import { ALLAN_PROFILE, ALLAN1_PROFILE, SAM_PROFILE, TERESA_PROFILE, SAMPLE_PROFILE, ANITA_PROFILE, DAD_PROFILE } from '../data/SampleProfile';

let allanAbout = "At Living Ancestry, our mission is to empower families to preserve their roots and create a meaningful connection with their heritage. We understand the importance of passing down traditions, preserving roots and values to future generations. That's why Living Ancestry's role is to help facilitate users to create meaningful and impactful digital time capsules. Our end goal is to address the challenges of generational wealth. Through the family tree, Living Ancestry's mission is to empower future generations to leverage the digital time capsules built overtime. Join us on this incredible journey of preserving your family's roots for the benefit of future generations."

const CARD_STYLE = {
    background: '#848482',
    textAlign: "center",
    marginBottom: 200,
    alignItems: "center",
    width: "100%"
};

export class Profile extends Component {
    static displayName = Profile.name;
    constructor(props) {
        super(props);        
        this.state = {
            viewStories: false,
            viewHobbies: false,
            viewTravels: false,
            viewRecipes: false,
            activeTab: 'about'
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    viewDirectory = (type) => {      
        switch (type) {
            case 0:
                this.props.history.push(this.props.match.params.id + '/stories')
                break;
            case 1:
                this.props.history.push(this.props.match.params.id + '/hobbies')
                break;
            case 2:
                this.props.history.push(this.props.match.params.id + '/travels')
                break;
            case 3:
                this.props.history.push(this.props.match.params.id + '/recipes')
                break;
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab != tab) {
            this.setState({ activeTab: tab });
        }
    }

    render() {       
        let { activeTab } = this.state;
        let profile = SAMPLE_PROFILE;
        switch (this.props.match.params.id) {
            case 'allanla':
                profile = ALLAN_PROFILE;
                break;
            case 'allanla1':
                profile = ALLAN1_PROFILE;
                break;
            case 'samla':
                profile = SAM_PROFILE;
                break;
            case 'teresala':
                profile = TERESA_PROFILE;
                break;
            case 'anitala':
                profile = ANITA_PROFILE;
                break;
            case 'davela':
                profile = DAD_PROFILE;
                break;
            default:
                profile = ALLAN_PROFILE;
                break;
        }
      
        if (this.props.match.params.id == "allanla") {
            return (
                <Container style={{marginTop: 20, height: '100%'}}>
                    <Nav tabs>
                        <NavItem style={{ cursor: 'pointer' }}>
                            <NavLink
                                style={{ cursor: 'hand', fontWeight: 'bold' }}
                                className={classnames({ active: activeTab === 'about' })}
                                onClick={() => { this.toggle('about'); }}>About
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ cursor: 'pointer' }}>
                            <NavLink
                                style={{ cursor: 'hand', fontWeight: 'bold' }}
                                className={classnames({ active: activeTab === 'timecapsule' })}
                                onClick={() => { this.toggle('timecapsule'); }}>Time Capsule
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ cursor: 'pointer' }}>
                            <NavLink
                                style={{ cursor: 'hand', fontWeight: 'bold' }}
                                className={classnames({ active: activeTab === 'socialmedia' })}
                                onClick={() => { this.toggle('socialmedia'); }}>Social Media
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="about">
                            <Row>
                                <Col>
                                    <CardImg top style={{ maxWidth: "300px", height: "auto" }} src={profile.image} alt="Profile Picture" />
                                </Col>
                                <Col>
                                    <CardSubtitle style={{ height: "300px", padding: "100px 0" }}>
                                        {profile.name}
                                        {<br />}
                                        Birthplace: {profile.birthplace}
                                        {<br />}
                                        Ethnicity: {profile.ethnicity}
                                        {<br />}
                                        Birthday: {profile.birthday}
                                        {<br />}
                                        Location: {profile.currentLocation}
                                    </CardSubtitle>
                                </Col>
                               
                                 <Button style={{ marginTop: 20 }} onClick={() => window.history.back()} id="Popover1"><ArrowLeft /></Button>
                                
                            </Row>
                            <Row>
                                <CardText style={{ marginTop: 10, marginBotton: 10, fontSize: 20, textAlign: "left" }}>{allanAbout}</CardText>
                            </Row>
                        </TabPane>
                        <TabPane tabId="timecapsule">
                            <TimeCapsule />
                        </TabPane>
                        <TabPane tabId="socialmedia">
                            <Card style={CARD_STYLE}>
                                <CardBody>
                                    <ListGroup>
                                        <ListGroupItem color="info">
                                            <h3>
                                                <Badge target="_blank" href={profile.portfolioUrl} color="success">
                                                    <i className="fab fa-linkedin"> View Portfolio</i></Badge>
                                            </h3>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </TabPane>
                    </TabContent>
                </Container>
            );
        }
        return (
            <Container style={{ marginTop: 20 }}>
                <Nav tabs>
                    <NavItem style={{ cursor: 'pointer' }}>
                        <NavLink
                            style={{cursor: 'hand', fontWeight: 'bold'}}
                            className={classnames({ active: activeTab === 'about' })}
                            onClick={() => { this.toggle('about'); }}>About

                        </NavLink>
                    </NavItem>

                    <NavItem style={{ cursor: 'pointer' }}>
                        <NavLink
                            style={{ cursor: 'hand', fontWeight: 'bold' }}
                            className={classnames({ active: activeTab === 'timecapsule' })}
                            onClick={() => { this.toggle('timecapsule'); }}>Time Capsule
                            </NavLink>
                    </NavItem>
                    <NavItem style={{ cursor: 'pointer' }}>
                        <NavLink
                            style={{ cursor: 'hand', fontWeight: 'bold' }}
                            className={classnames({ active: activeTab === 'socialmedia' })}
                            onClick={() => { this.toggle('socialmedia'); }}>Social Media
                            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="about">
                        <Row>
                            <Col>
                                <CardImg top style={{ maxWidth: "300px", height: "auto" }} src={profile.image} alt="Profile Picture" />
                            </Col>
                            <Col>
                                <CardSubtitle style={{ height: "300px", padding: "100px 0" }}>
                                    {profile.name}
                                    {<br />}
                                    Birthplace: {profile.birthplace}
                                    {<br />}
                                    Ethnicity: {profile.ethnicity}
                                    {<br />}
                                    Birthday: {profile.birthday}
                                    {<br />}
                                    Location: {profile.currentLocation}
                                </CardSubtitle>
                            </Col>
                            <Button style={{ marginTop: 20 }} onClick={() => window.history.back()} id="Popover1"><ArrowLeft /></Button>
                        </Row>
                        <Row>
                            <CardText style={{ marginTop: 10, marginBotton: 10, fontSize: 20, textAlign: "left" }}>{profile.about}</CardText>
                        </Row>               
                    </TabPane>

                    <TabPane tabId="timecapsule">
                        <TimeCapsule />
                    </TabPane>

                    <TabPane tabId="socialmedia">
                        <Card style={CARD_STYLE}>
                            <CardBody>
                                <ListGroup>
                                    <ListGroupItem color="info">
                                        <h3>
                                            <Badge target="_blank" href={profile.portfolioUrl} color="success">
                                                <i className="fab fa-linkedin"> View Portfolio</i></Badge>
                                        </h3>
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </TabPane>
                </TabContent>
            </Container>
        );
    }
}

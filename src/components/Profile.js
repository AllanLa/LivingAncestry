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

let allanAbout = "Hi! I am the founder of Living Ancestry, thank you for visiting this site and supporting Living Ancestry. I can't do this alone, please help me by signing up for the beta release on the home page to help me move this project forward! This profile example illustrates how one's public or private digital time capsule can be customized. There will be some basic information a user will be required to provide. The rest of the profile, a user can customize how they like to. I want to leave behind a profile to help my descendants in the future in whatever ways I think I can help them. Hopefully, my descendants will learn all about where they came from, our struggles, our stories, and hopefully be inspired to leave their own behind their own digital time capsule for the next generation. Please sign up for the beta release to support Living Ancestry on the home page! Feel free to follow me or Living Ancestry's social media profiles to learn more and receive information in the future.";

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
                <Container style={{marginBottom: 10, height: '100%'}}>
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
            <Container style={{ marginBottom: 10 }}>
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

                                    <ListGroupItem color="info">
                                        <h3>
                                            <Badge target="_blank" href={profile.instagramUrl} color="danger">
                                                <i className="fab fa-instagram"> View Instagram</i></Badge>
                                        </h3>
                                    </ListGroupItem>

                                    <ListGroupItem color="info">
                                        <h3>
                                            <Badge target="_blank" href={profile.facebookUrl} color="primary">
                                                <i className="fab fa-facebook"> View Facebook</i></Badge>
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

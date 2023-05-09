import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Badge, Row } from 'reactstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import { Breaking } from './Breaking';
import { Snowboarding } from './Snowboarding';

export class Hobbies extends Component {
    static displayName = Hobbies.name;
    constructor(props) {
        super(props);
        this.state = {
            activeHobby: null
        };
    }

    componentDidMount = () => {
     
    }

    setHobby(hobby) {
        this.setState({ activeHobby: hobby });
    }

    resetHobby() {
        this.setState({ activeHobby: null });
    }

    render() {
        const { activeHobby } = this.state;
        return (
            <Card style={{ textAlign: "center" , marginBottom: 20}}>
                <CardBody>
                    {!activeHobby &&
                        <ListGroup style={{ marginTop: 10, marginBottom: 10, fontSize: 20, textAlign: "left" }}>
                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>Breakdancing</h5>
                                    <Button style={{ height: '40px' }} onClick={() => this.setHobby("breaking")} color="secondary"><ArrowRight /></Button>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>Snowboarding</h5>
                                <Button style={{ height: '40px' }} onClick={() => this.setHobby("snowboarding")} color="secondary"><ArrowRight /></Button>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>Users will be able to add as many directories as they need</h5>
                                    <Button style={{ height: '40px' }} disabled color="secondary"><ArrowRight /></Button>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    }
                    {activeHobby === 'breaking' &&
                        <Breaking resetHobby={this.resetHobby.bind(this)} />
                    }
                    {activeHobby === 'snowboarding' &&
                        <Snowboarding resetHobby={this.resetHobby.bind(this)} />
                    }
                </CardBody>
            </Card>
        );
    }
}

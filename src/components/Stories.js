import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Badge, Row } from 'reactstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import { American } from './American';
import { College } from './College';

export class Stories extends Component {
    static displayName = Stories.name;
    constructor(props) {
        super(props);
        this.state = {
            activeStory: null
        };
    }

    componentDidMount = () => {
        //console.log(this.props.location.state)
    }

    setStory(story) {
        this.setState({ activeStory: story });
    }

    resetStory() {
        this.setState({ activeStory: null });
    }

    render() {
        const { activeStory } = this.state;
        return (
            <Card style={{ textAlign: "center" , marginBottom: 20}}>
                <CardBody>
                    {!activeStory &&
                        <ListGroup style={{ marginTop: 10, marginBottom: 10, fontSize: 20, textAlign: "left" }}>
                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>First Generation American Experience</h5>
                                    <Button style={{ height: '40px' }} onClick={() => this.setStory('american')} color="secondary"><ArrowRight /></Button>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>My College Survival Guide</h5>
                                    <Button style={{ height: '40px' }} onClick={() => this.setStory('college')} color="secondary"><ArrowRight /></Button>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>Users will be able to add as many directories as they need</h5>
                                    <Button style={{ height: '40px'}} disabled color="secondary"><ArrowRight /></Button>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    }
                    {activeStory === 'american' &&
                        <American resetStory={this.resetStory.bind(this)} />
                    }
                    {activeStory === 'college' &&
                        <College resetStory={this.resetStory.bind(this)} />
                    }
                </CardBody>
            </Card>
        );
    }
}

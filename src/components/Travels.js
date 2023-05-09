import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Badge, Row } from 'reactstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import { Chinatown } from './Chinatown';

export class Travels extends Component {
    static displayName = Travels.name;
    constructor(props) {
        super(props);
        this.state = {
            activeTravel: null
        };
    }

    componentDidMount = () => {
     
    }

    setTravel(travel) {
        this.setState({ activeTravel: travel });
    }

    resetTravel() {
        this.setState({ activeTravel: null });
    }

    render() {
        const { activeTravel } = this.state;
        return (
            <Card style={{ textAlign: "center" , marginBottom: 20}}>
                <CardBody>
                    {!activeTravel &&
                        <ListGroup style={{ marginTop: 10, marginBottom: 10, fontSize: 20, textAlign: "left" }}>
                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>Chinatowns Around The World</h5>
                                    <Button style={{ height: '40px' }} onClick={() => this.setTravel('chinatown')} color="secondary"><ArrowRight /></Button>
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
                    {activeTravel === 'chinatown' &&
                        <Chinatown resetTravel={this.resetTravel.bind(this)} />
                    }
                </CardBody>
            </Card>
        );
    }
}

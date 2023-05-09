import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Badge, Row } from 'reactstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import { BunRieu } from './BunRieu';

export class Recipes extends Component {
    static displayName = Recipes.name;
    constructor(props) {
        super(props);
        this.state = {
            activeRecipe: null
        };
    }

    componentDidMount = () => {
     
    }

    setRecipe(recipe) {
        this.setState({ activeRecipe: recipe });
    }

    resetRecipe() {
        this.setState({ activeRecipe: null });
    }

    render() {
        const { activeRecipe } = this.state;
        return (
            <Card style={{ textAlign: "center" , marginBottom: 20}}>
                <CardBody>
                    {!activeRecipe &&
                        <ListGroup style={{ marginTop: 10, marginBottom: 10, fontSize: 20, textAlign: "left" }}>
                            <ListGroupItem className='lightgrey-bg'>
                                <Row style={{ justifyContent: "space-between" }}>
                                    <h5>Bun Rieu</h5>
                                    <Button style={{ height: '40px' }} onClick={() => this.setRecipe('bunrieu')} color="secondary"><ArrowRight /></Button>
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
                    {activeRecipe === 'bunrieu' &&
                        <BunRieu resetRecipe={this.resetRecipe.bind(this)} />
                    }
                </CardBody>
            </Card>
        );
    }
}

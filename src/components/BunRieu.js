import React, { Component } from 'react';
import { Card, CardBody, Button, Row } from 'reactstrap';
import BunRieuImage from './imgs/BunRieu.jpg';

import { MediaCarousel } from './MediaCarousel';

export class BunRieu extends Component {
    static displayName = BunRieu.name;
    constructor(props) {
        super(props);        
    }

    render() {
        const { resetRecipe } = this.props;
        return (
            <Card style={{ textAlign: "left", marginBottom: 20 }}>
                <Button onClick={resetRecipe} className='backButton' color="link" size="sm">Go back</Button>
                <Row style={{ justifyContent: "center" }}>              
                    <MediaCarousel images={[BunRieuImage]} videos={[]} />                
                </Row>
                <CardBody style={{ fontSize: 20 }}>                 
                    We ate this all the time growing up! This was probably one of my favorite dishes that my mom made. It's a very popular Vietnamnese dish. Try it at a resturaunt or make your own! You won't regret it. Pass down your recipes, keep your traditions alive. Follow the instructions <a target="_blank" href="https://seonkyounglongest.com/bun-rieu/">here </a> to make your own Bun Rieu! 
                </CardBody>          
            </Card>
        );
    }
}

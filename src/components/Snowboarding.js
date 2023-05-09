import React, { Component } from 'react';
import { Card, CardBody, Button, Row } from 'reactstrap';
import snowboarding from './imgs/snowboarding.MOV';
import snowboarding2 from './imgs/snowboarding2.mov';
import snowboarding1 from './imgs/snowboarding1.jpg';

import { MediaCarousel } from './MediaCarousel';

export class Snowboarding extends Component {
    static displayName = Snowboarding.name;
    constructor(props) {
        super(props);        
    }

    render() {
        const { resetHobby } = this.props;
        return (
            <Card style={{ textAlign: "left", marginBottom: 20 }}>
                <Button onClick={resetHobby} className='backButton' color="link" size="sm">Go back</Button>
                <Row style={{ justifyContent: "center" }}>                  
                    <MediaCarousel images={[snowboarding1]} videos={[snowboarding, snowboarding2]} />
                </Row>
                <CardBody>                 
                    Snowboarding is by far one of my favorite hobbies. I started getting really into it post undergrad when I moved to Seattle. I ate so much shit, like you have no idea. But thats the magic of the sport, the risks you take for the thrill and enjoyment of the sport. I highly recommend going at least once, either try skiing or snowboarding. Maybe they have some new way to go down the slopes in the future, that would be super cool. You too could pick up this hobby! If I can do it, so can you!
                </CardBody>          
            </Card>
        );
    }
}

import React, { Component } from 'react';
import { Card, CardBody, Button, Row } from 'reactstrap';
import Seattle from './imgs/ChinatownSeattle.jpg';
import Portland from './imgs/ChinatownPortland.JPG';
import SanFran from './imgs/ChinatownSanFran.jpg';
import Vancouver from './imgs/ChinatownVancouver.jpg';
import Montreal from './imgs/ChinatownMontreal.JPG';
import Boston from './imgs/ChinatownBoston.jpg';
import NewYork from './imgs/ChinatownNewYork.jpg';
import Philly from './imgs/ChinatownPhilly.jpg';
import London from './imgs/ChinatownLondon.jpg';
import { ArrowLeft } from 'react-bootstrap-icons';

import { MediaCarousel } from './MediaCarousel';

export class Chinatown extends Component {
    static displayName = Chinatown.name;
    constructor(props) {
        super(props);        
    }

    componentDidMount = () => {
        //console.log(this.props.location.state)
    }

    render() {
        const { resetTravel } = this.props;
        return (
            <Card style={{ textAlign: "center", marginBottom: 20 }}>
                <Button onClick={resetTravel} className='backButton' color="link" size="sm"><ArrowLeft/></Button>
                <Row style={{ justifyContent: "center" }}>                 
                    <MediaCarousel images={[Seattle, Portland, Vancouver, Montreal, SanFran, NewYork, Boston, Philly, London]} videos={[]} />
                </Row>
                <CardBody style={{ fontSize: 20 }}>                 
                    For some reason, I was always fascinated with Chinatowns, well probably because I'm Asian. But in anycase, what I found most interesting is how different each one is. Especially the gates! So I made an effort that everywhere I go, if there is a Chinatown, it was a personal mission of mine to go and take a picture with the gate. I think this would be a fun thing to share with my family and future descendants! Maybe they will now try to visit and document their own "Chinatowns"!
                </CardBody>          
            </Card>
        );
    }
}

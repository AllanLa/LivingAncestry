import React, { Component } from 'react';
import { Card, CardBody, Button, Row } from 'reactstrap';
import breaking from './imgs/breaking.JPG';
import breaking2 from './imgs/breaking2.JPG';
import breaking3 from './imgs/breaking3.JPG';
import breaking4 from './imgs/breaking4.jpg';
import breakingVideo from './imgs/breakingVideo.mp4';

import { MediaCarousel } from './MediaCarousel';

export class Breaking extends Component {
    static displayName = Breaking.name;
    constructor(props) {
        super(props);        
    }

    render() {
        const { resetHobby } = this.props;
        return (
            <Card style={{ textAlign: "left", marginBottom: 20 }}>
                <Button onClick={resetHobby} className='backButton' color="link" size="sm">Go back</Button>
                <Row style={{ justifyContent: "center" }}>                  
                    <MediaCarousel images={[breaking, breaking2, breaking3, breaking4]} videos={[breakingVideo]} />             
                </Row>

                <CardBody>                 
                    I first began breakdancing in middle school around 7th grade. What inspired me was the dance show called America's Best Dance Crew. The Jabbawaukees completely killed it! Do you even know who they are? Do they still exist? Maybe their videos will still be up on Youtube. Will there even be a Youtube??? Hahaha. In any case breakdancing was and still is a big part of my life. The ability to express yourself through dance. It definitely changed my style as a person as well. I like to think because of breakdancing I have a more street-sense type. In anycase, breakdancing is amazing and so fun. You can start by just finding videos online. Search "Breakdancing Tutorials" online and find what you like. I began by just watching videos and learning all the basics. Lucky for me, my high school had a breakdancing club so I really had a spot to practice and people to encourage me as well. In any case, I hope that if you are reading this, you can also breakdance, you can learn! To the users reading this for beta-sign ups, I want my profile to educate and inspire whoever see's my time capsule. Hopefully they start a new hobby because of my capsule. Here are some other videos if you want to watch more!
                </CardBody>      
                <Row style={{ justifyContent: "center" }}>
                    <a href="https://www.youtube.com/watch?v=ywTwPsjzB9I" target="_blank" >
                        <Button style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }} color="secondary" size="lg">View Video</Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=foSbrfuZxfQ" target="_blank" >
                        <Button style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }} color="secondary" size="lg">View Other Video</Button>
                    </a>
                </Row> 
            </Card>
        );
    }
}

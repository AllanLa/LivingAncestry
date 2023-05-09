import React, { Component } from 'react';
import { Card, CardBody, Button, Row } from 'reactstrap';
import { Download } from 'react-bootstrap-icons';
import Bucknell from './imgs/Bucknell.jpg';
import Bucknell1 from './imgs/Bucknell1.jpg';
import Bucknell2 from './imgs/Bucknell2.jpg';
import pdf from './files/SurvivalGuide.pdf';

import { MediaCarousel } from './MediaCarousel';

export class College extends Component {
    static displayName = College.name;
    constructor(props) {
        super(props);        
    }

    render() {
        const { resetStory } = this.props;
        return (
            <Card style={{ textAlign: "left", marginBottom: 20 }}>
                <Button onClick={resetStory} className='backButton' color="link" size="sm">Go back</Button>
                <Row style={{ justifyContent: "center" }}>                 
                    <MediaCarousel images={[Bucknell, Bucknell1, Bucknell2]} videos={[]} />
                </Row>
                <CardBody>                 
                    College was quite a time for me. It was a time of discovery and really understanding my identity as a first generation Asian American Male. Growing up in Boston, you're used to seeing diversity. College was a very tough environment due to people coming from all sorts of different backgrounds and learning how to interact with these people who grew up very different lives than I did. Don't worry if college is hard, I felt this same way. My first year was the hardest, my last year was the easiest. Everyone has their own journey to figure out. If you're reading this, you got it. You can do it. I almost dropped out of college after my first semester. Can you believe that the first test I ever failed in my life was math?!?!? MATH?!?!? It was crazy. I started really having an identity crisis because my whole life I figured I enter the industry as an engineer. If I can't even pass a math test, the best subject I'm in, how could I ever be an engineer? But I did it, and so will you. And to help you out, I will leave behind my college survival guide and hopefully you'll find it useful. I'll also leave behind my resume for when I was applying to internships. I didn't know at all how to build one, but hopefully you can use this as an example. Will people even use resumes in the future? lol
                </CardBody>

                <Row style={{ justifyContent: "center" }}>
                    <form style={{ textAlign: "center" }} method="get" action={pdf} target="_blank">
                        <Button style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }} color="secondary" size="lg">View Survival Guide <Download /></Button>
                    </form>  

                    <form style={{ textAlign: "center" }} method="get" action={"https://allanla.github.io/portfolio/documents/resume.pdf?"} target="_blank">
                        <Button style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }} color="secondary" size="lg">View Resume <Download /></Button>
                    </form>  
                </Row> 
            </Card>
        );
    }
}

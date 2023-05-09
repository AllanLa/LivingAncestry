import React, { Component } from 'react';
import { Card, CardBody, Button,Row } from 'reactstrap';
import American0 from './imgs/American.jpg';
import American1 from './imgs/American1.jpg';
import American2 from './imgs/American2.jpg';

import { MediaCarousel } from './MediaCarousel';

export class American extends Component {
    static displayName = American.name;
    constructor(props) {
        super(props);        
    }

    render() {
        const { resetStory } = this.props;
        return (
            <Card style={{ textAlign: "left", marginBottom: 20 }}>
                <Button onClick={resetStory} className='backButton' color="link" size="sm">Go Back</Button>
                <Row style={{ justifyContent: "center" }}>                   
                    <MediaCarousel style={{maxWidth: 200}} images={[American0, American1, American2]} videos={[]} />
                </Row>
                <CardBody style={{ fontSize: 20 }}>                 
                    Growing up as a first generation American was very difficult. You have all these expectations from your parents who just immigrated to America. They sacrificed so much for me and want me to pursue the American Dream. I grew up in the projects after moving to Boston from Canada around the age of 6. At a young point of my life, I started thinking about financial freedom, the ability to take care of myself and my family when I grow up. However we didn't have any resources. We didn't have anyone who could help. I only had my dad and my mom. My dad worked at Target and is still working there. My mom stayed at home taking care of her children. I knew at a young point I needed to work hard in school in order to go to a good college and thus get a good job, for the sake of my parents. Now that I'm at Microsoft, the dream my parents had for me, I began thinking more. How many others are in the same boat as me? There were definitely other families out there who have no idea how to say apply for finanical aid for college, etc. I have a vision that Living Ancestry will become an archive of gold, where the gold are our stories. Our stories to help the future. I hope that my profile one day will help someone, someone in college, someone wanting to be inspired, what kind of profile will you make?
                </CardBody>          
            </Card>
        );
    }
}

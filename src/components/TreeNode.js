import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';


export class TreeNode extends Component {

    constructor(props) {
        super(props);
        this.openBasicProfile = this.openBasicProfile.bind(this);
        this.setPicture = this.setPicture.bind(this);
        this.state = {
            nodePicture: ''
        }
    }

    openBasicProfile() {
        this.props.openBasicProfile(this.props.nodeData);
    }

    setPicture(image) {
        this.setState({ nodePicture: `data:image/jpeg;base64,${image}` });
    }

    render() {
        const { nodeData } = this.props;
        return (
            <div className='treenode'>
                <Card onClick={this.openBasicProfile} >
                    <CardImg top height='100' width='100' x='20' y='20' src={nodeData.picture} alt="Profile Picture" />
                </Card>
            </div>
        );
    }
}

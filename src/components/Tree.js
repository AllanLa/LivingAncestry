import React, { Component } from 'react';
import { Tree as D3Tree } from 'react-d3-tree';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, PopoverBody, PopoverHeader, UncontrolledPopover, Popover, Container } from 'reactstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import { SAMPLE_DATA } from '../data/SampleData';
import { TreeNode } from './TreeNode';
import { IS_APPLE } from '../utils/utils';

const SHAPE_NONE = {
    shape: 'none'
};

export class Tree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBasicProfile: false,
            popoverOpen: false,
            profile: {},
            translate: {},
            dimensions: {x: 0, y:0}
        }
        this.openBasicProfile = this.openBasicProfile.bind(this);
        this.closeBasicProfile = this.closeBasicProfile.bind(this);
        this.openProfile = this.openProfile.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        console.log(dimensions);
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 8
            },
            dimensions: {
                x: dimensions.width / 2,
                y: dimensions.height / 2
            }
        });
        window.scrollTo(0, 0)
    }

    openBasicProfile(profile) {
        this.setState({ showBasicProfile: true, profile });
    }

    closeBasicProfile() {
        this.setState({ showBasicProfile: false, profile: {} })
    }

    openProfile(profile) {
        this.props.history.push(`/profile/${profile.profile}`);
    }

    handleProfileClick(data) {
        this.openBasicProfile(data);
    }

    render() {
        const { showBasicProfile, profile, translate } = this.state;
       
        return (
            <Container>
                <div ref={tc => (this.treeContainer = tc)} style={{ height: '500px' }}>                
                    <div>
                        <Button style={{ marginTop: 20 }} onClick={() => window.history.back()} id="Popover1"><ArrowLeft /></Button>
                    </div>

                    {!IS_APPLE &&
                    <D3Tree data={SAMPLE_DATA}
                        allowForeignObjects
                        nodeLabelComponent={{
                            render: <TreeNode openBasicProfile={this.openBasicProfile} />,
                            foreignObjectWrapper: {
                                height: 100,
                                width: 100
                            }
                        }}
                        collapsible={false}
                        orientation='vertical'
                        pathFunc='step'
                        translate={translate} />
                    }
                    {IS_APPLE &&
                    <D3Tree data={SAMPLE_DATA}
                        collapsible={false}
                        orientation='vertical'
                        pathFunc='step'
                        onClick={this.handleProfileClick}
                        translate={translate} />
                    }

                    <div />
                    <UncontrolledPopover
                        hideArrow
                        placement='auto'
                        trigger='click'
                        isOpen={showBasicProfile}
                        toggle={() => this.setState({ showBasicProfile: false })}
                        target='Popover1'>
                       
                        <PopoverBody>
                            <Card top width='100%'>
                                <CardBody>
                                    <Button style={{ maxHeight: 30, marginBottom: 5 }}  close onClick={this.closeBasicProfile} />
                                    <CardImg top style={{ marginBottom: 10 , maxHeight: 200}} width="50%" src={profile.picture} alt="Profile Picture" />
                                    <CardSubtitle>{profile.subtitle}</CardSubtitle>
                                    <CardText>{profile.description}</CardText>
                                    <Button color='primary' onClick={this.openProfile.bind(this, profile)} >View full profile</Button>
                                </CardBody>
                            </Card>
                        </PopoverBody>
                        <PopoverHeader>Name: {profile.name}</PopoverHeader>
                    </UncontrolledPopover>
                </div>
            </Container>
        );
    }
}

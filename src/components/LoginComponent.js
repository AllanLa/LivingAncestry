import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import '../css/Login.css';

const GOOGLE_CLIENT_ID = "849487254826-roghgvvfk9oo1gj8u2fp4vhfhre1pmr2.apps.googleusercontent.com"
const FACEBOOK_APP_ID = "739146219944020";

export class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }


    successResponseGoogle = (response) => {
        this.setState({
            loggedIn: true
        }, () => this.props.displayProfileInformation())
        console.log(response);
    }

    failureResponseGoogle = (response) => {
        console.log(response);
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            loggedIn: true
        }, () => this.props.displayProfileInformation())
    }

    facebookComponentClicked = (event) => {
        console.log(event)
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/profile'/>
        }
        return (
            <Row>
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={(response) => this.successResponseGoogle(response)}
                    onFailure={(response) => this.failureResponseGoogle(response)}
                    cookiePolicy={'single_host_origin'}
                />  
                <Col>
                    <FacebookLogin
                        appId={FACEBOOK_APP_ID}
                        autoLoad={false}
                        cssClass='facebook-login'
                        fields="name,email,picture"
                        onClick={(event) => this.facebookComponentClicked(event)}
                        callback={this.responseFacebook}
                        
                    />
                </Col>
            </Row>
        );
    }
}

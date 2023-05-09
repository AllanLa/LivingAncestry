import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import '../css/Layout.css'; 

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div style={{ height: '100%' }} className={"body"}>
            <NavMenu />
        <div >
            {this.props.children}
            </div>
            <Footer style={{ height: '2.5rem', width: '100%', position: 'absolute', bottom: 0 }}/>
      </div>
    );
  }
}

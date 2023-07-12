import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import '../css/Layout.css'; 

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (
            <div>
                <div style={{  minHeight: '90vh' }} className={"body"}>
                    <NavMenu />
                    <div >
                        {this.props.children}
                    </div>
                </div>
                <Footer style={{ maxHeight: '2vh', width: '100%', position: 'absolute', bottom: 0 }} />
          </div>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import { FORCE } from '../utils/utils';

export class Link extends Component {

    componentDidMount() {
        this.d3Link = d3.select(ReactDOM.findDOMNode(this)).
            datum(this.props.data).
            call(FORCE.enterLink);
    }

    componentDidUpdate() {
        this.d3Link.datum(this.props.data).
            call(FORCE.updateLink);
    }

    render() {
        return (
            React.createElement("line", { className: "link" }));

    }
}
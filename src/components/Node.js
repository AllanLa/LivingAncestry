import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import { FORCE } from '../utils/utils';

export class Node extends Component {

    componentDidMount() {
        this.d3Node = d3.select(ReactDOM.findDOMNode(this)).
            datum(this.props.data).
            call(FORCE.enterNode);
    }

    componentDidUpdate() {
        this.d3Node.datum(this.props.data).
            call(FORCE.updateNode);
    }

    render() {
        return (
            React.createElement("g", { className: "node" },
                React.createElement("circle", { onClick: this.props.addLink }),
                React.createElement("text", null, this.props.data.name)));


    }
}
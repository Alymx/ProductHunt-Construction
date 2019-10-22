import React, { Component } from 'react';
import Recommend from './Recommend';
import Discussion from './Discussion';

export default class Comments extends Component {


    render() {
        return (
            <div className="commentaires">
                <Recommend liker={this.props.liker} enabler={this.props.enabler} />
                <Discussion />
            </div>
        );
    }
}

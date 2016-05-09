import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default class HomeSection extends Component {

    render() {
        return (
            <div>
                <p>This is the home page of our chat app</p>
            </div>
        );
    }
};
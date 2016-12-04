import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

export default class Accounts extends Component {
    render() {
        return (
            <div className="accounts">
                <LoginButtons />
            </div>
        );
    }
};
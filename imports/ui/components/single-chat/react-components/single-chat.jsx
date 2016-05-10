import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


export default class SingleChat extends Component {

    render(chat = this.props.chat) {
        return (
            <div className="chat__single">
                <a href={FlowRouter.path('/')}>Back</a>
                <h3>{chat.title}</h3>
                <p>
                    Created with love at:{` (${chat.createdAt.getFullYear()}-${chat.createdAt.getMonth()+1}-${chat.createdAt.getDate()} at ${chat.createdAt.getHours()}:${chat.createdAt.getMinutes()})`}
                </p>
                <hr />
            </div>
        );
    }
};
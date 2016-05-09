import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


export default class HomeSection extends Component {

    renderChats() {
        return this.props.chats.map(({_id, title, createdAt}) => (
            <li key={_id}>
                <a href={FlowRouter.path('chat', {_id})}>{title}</a>
                <span className="home__date">
                    {` (${createdAt.getFullYear()}-${createdAt.getMonth()+1}-${createdAt.getDate()} at ${createdAt.getHours()}:${createdAt.getMinutes()})`}
                </span>
            </li>
        ));
    }

    handleSubmit(event) {
        event.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call('chat.insert', text);
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    handleClearAll(event) {
        event.preventDefault();
        Meteor.call('chats.clearAll');
    }

    render() {
        return (
            <div>
                <p>This is the home page of our chat app</p>
                <h5>Enter a new text</h5>
                <form className="new-chat" onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        ref="textInput"
                        placeholder="Type to add new text"
                        />
                </form>
                <hr/>
                <button className="button" name="clearAll" onClick={this.handleClearAll.bind(this)}>Delete all</button>
                <ul>
                    {this.renderChats()}
                </ul>
            </div>

        );
    }
};
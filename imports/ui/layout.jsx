import React, { Component } from 'react';

export default class MainLayout extends Component {
    render() {
        return (
        <div className="row">
            <article className="twelve columns text-center">
                <header>
                    <h1>Mini chat demo</h1>
                    <h3>Implemented with meteor, react and Server Side Rendering</h3>
                </header>
                <main>{this.props.content}</main>
                <footer>We love Meteor</footer>
            </article>
        </div>
        );
    }
};
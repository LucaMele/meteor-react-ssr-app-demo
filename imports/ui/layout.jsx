import React, { Component } from 'react';

export default class MainLayout extends Component {
    render(content = this.props.content, accounts = this.props.accounts) {
        return (
            <div className="row">
                {accounts ? <aside>{accounts}</aside> : ''}
                <article className="twelve columns text-center">
                    <header>
                        <h1>Mini chat demo</h1>
                        <h3>Implemented with meteor, react and Server Side Rendering</h3>
                    </header>
                    <main>{content}</main>
                    <footer>We love Meteor</footer>
                </article>
            </div>
        );
    }
};
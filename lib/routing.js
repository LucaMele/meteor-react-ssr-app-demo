import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import MainLayout from '../imports/ui/layout.jsx';
import Home from '../imports/ui/components/main/index.js';
import SingleChat from '../imports/ui/components/single-chat/index.js';

FlowRouter.route('/', {
    name: "home",
    action() {
        mount(MainLayout, {content: <Home />});
    }
});

FlowRouter.route('/chat/:_id', {
    name: "chat",
    action(params) {
        mount(MainLayout, {content: <SingleChat _id={params._id}/>});
    }
});

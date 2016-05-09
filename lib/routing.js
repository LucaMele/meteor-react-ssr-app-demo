import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import MainLayout from '../imports/ui/layout.jsx';
import Home from '../imports/ui/components/main/index.js';

FlowRouter.route('/', {
    name: "home",
    action() {
        mount(MainLayout, {content: <Home />});
    }
});
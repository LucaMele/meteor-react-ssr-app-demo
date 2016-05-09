import { composeWithTracker } from 'react-komposer';
import HomeSection from './react-components/home.jsx';
import { DocHead } from 'meteor/kadira:dochead';

function composer(props, onData) {
    const handle = Meteor.subscribe('chats');
    if(handle.ready()) {
        const chats = Chats.find({}, {sort: {_id: 1}}).fetch();
        onData(null, {chats});
    }
    DocHead.setTitle('Chat demo');
}

export default composeWithTracker(composer)(HomeSection);

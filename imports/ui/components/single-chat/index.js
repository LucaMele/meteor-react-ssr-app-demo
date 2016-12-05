import { composeWithTracker } from 'react-komposer';
import SingleChat from './react-components/single-chat.jsx';
import { DocHead } from 'meteor/kadira:dochead';
import { Chats } from '../../../api/chats.js';

function composer(props, onData) {
    const handle = Meteor.subscribe('singleChat', props._id);

    if(handle.ready()) {
        const chat = Chats.findOne({_id: props._id});
        onData(null, {chat});
        DocHead.setTitle(chat.title);
        DocHead.addMeta({
            name: 'description', content: chat.title.substr(0, 20)
        });
        let metaInfo = {
            name: "http-equiv", content: "Content-Security-Policy",
            name: "content", content: "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://yourdomain.com wss://yourdomain.com https://enginex.kadira.io"
        };
        DocHead.addMeta(metaInfo);
    }
};

export default composeWithTracker(composer)(SingleChat);

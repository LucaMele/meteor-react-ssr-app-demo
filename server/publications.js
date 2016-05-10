import { Chats } from '../imports/api/chats.js';

Meteor.publish('chats', () => {
  const selector = {category: {$ne: "private"}};
  return Chats.find(selector);
});

Meteor.publish('singleChat', (_id) => {
  const selector = {_id: _id};
  return Chats.find(selector);
});
import { Chats } from '../imports/api/chats.js';

Meteor.publish('chats', () => {
  const selector = {category: {$ne: "private"}};
  return Chats.find(selector);
});
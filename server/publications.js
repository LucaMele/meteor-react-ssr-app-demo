Meteor.publish('chats', () => {
  const selector = {category: {$ne: "private"}};
  return Chats.find(selector);
});
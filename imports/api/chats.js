import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Chats = new Mongo.Collection('chats');



Meteor.methods({
    'chat.insert'(text) {
        check(text, String);
        Chats.insert({
            title: text,
            createdAt: new Date()
        });
    },
    'chats.clearAll'() {
        Chats.remove({});
    }
});
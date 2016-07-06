import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tags = new Mongo.Collection('tags');

if (Meteor.isServer) {
    Meteor.publish('tags', function tagsPublication() {
        return Tags.find();
    });
}

Meteor.methods({
    'tags.insert'(name, userId) {
        check(name, String);
        check(userId, String);

        Tags.upsert({name: name, userId: userId}, {$inc: { count: 1}});
    },
    'tags.remove'(names, userId) {
        check(names, [String]);

        Tags.update({name: {$in:names}, userId: userId}, {$inc: {count: -1}}, {multi: true});
        Tags.remove({count: {$lte: 0}});
    },
});
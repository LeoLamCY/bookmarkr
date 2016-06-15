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
    'tags.insert'(name) {
        check(name, String);
        Tags.upsert({name: name}, {$inc: { count: 1}});
    },
    'tags.remove'(names) {
        check(names, [String]);

        Tags.update({name: {$in:names}}, {$inc: {count: -1}}, {multi: true});
        Tags.remove({count: {$lte: 0}});
    },
});
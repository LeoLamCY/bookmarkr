import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tags = new Mongo.Collection('tags');

Meteor.methods({
    'tags.insert'(name) {
        Tags.upsert({name: name}, {$inc: { count: 1}});

        // if(Tags.find({name: name}).fetch().length == 0) {
        //     Tags.insert({
        //         name: name,
        //         count: 0,
        //     });
        // }
        // else {
        //     Tags.update({name: name}, {$inc: {count: 1}});
        // }
    },
    'tags.remove'(names) {
        Tags.update({name: {$in:names}}, {$inc: {count: -1}}, {multi: true});
        Tags.remove({count: {$lte: 0}});
    },
});
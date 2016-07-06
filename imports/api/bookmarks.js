import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Tags } from '/imports/api/tags.js';

export const Bookmarks = new Mongo.Collection('bookmarks');

if (Meteor.isServer) {
    Meteor.publish('bookmarks', function bookmarksPublication() {
        return Bookmarks.find();
    });
}

Meteor.methods({
    'bookmarks.insert'(title, url, tags, userId) {
        check(title, String);
        check(url, String);
        check(tags, String);
        check(userId, String);

        const tagsArray = tags.split(/,\s*/);
        const date = moment().toDate();

        if(!Meteor.users.findOne({ _id: userId })) {
            throw new Meteor.Error(403, "user does not exist!");
        }

        if(!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }

        tagsArray.map( (name) => {
            Meteor.call('tags.insert', name, userId);
        });

        Bookmarks.insert({
            title,
            url,
            tagsArray,
            created: date,
            userId,
        }, (err, id) => {
            // id == null ? this.setState({'submitSuccess': false}) : this.setState({'submitSuccess': true});
        });
    },
    'bookmarks.remove'(id, tagsArray, userId) {
        check(id, String);
        check(tagsArray, [String]);
        check(userId, String);

        Meteor.call('tags.remove', tagsArray, userId);
        Bookmarks.remove(id);
    },
});

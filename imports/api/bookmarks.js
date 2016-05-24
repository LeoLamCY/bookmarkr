import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Tags } from '/imports/api/tags.js';

export const Bookmarks = new Mongo.Collection('bookmarks');

Meteor.methods({
    'bookmarks.insert'(title, url, tags) {
        check(title, String);
        check(url, String);
        check(tags, String);

        const tagsArray = tags.split(',');
        const date = moment().toDate();

        if(!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }

        tagsArray.map( (name) => {
            Meteor.call('tags.insert', name);
        });

        Bookmarks.insert({
            title,
            url,
            tagsArray,
            created: date,
        }, (err, id) => {
            // id == null ? this.setState({'submitSuccess': false}) : this.setState({'submitSuccess': true});
        });
    },
    'bookmarks.remove'(id, tagsArray) {
        check(id, String);
        check(tagsArray, [String]);

        Meteor.call('tags.remove', tagsArray);
        Bookmarks.remove(id);
    },
});
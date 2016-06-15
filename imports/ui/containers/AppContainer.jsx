import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';
import { Tags } from '/imports/api/tags.js';

export default createContainer(( {params: { selectedTags }} ) => {
    Meteor.subscribe('tags');
    Meteor.subscribe('bookmarks');

    var bookmarks = Bookmarks.find({}, {sort: {created: -1}}).fetch();
    var tags = Tags.find({}, {sort: {name: 1}}).fetch();

    if(selectedTags) {
        return {
            bookmarks: bookmarks,
            tags: tags,
            selectedTags: selectedTags.trim(),
        };
    }
    else {
        return {
            bookmarks: bookmarks,
            tags: tags,
        };
    }

}, App);

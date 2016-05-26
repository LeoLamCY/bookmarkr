import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';
import { Tags } from '/imports/api/tags.js';

export default createContainer(( {params: { selectedTags }} ) => {
    Meteor.subscribe('tags');
    Meteor.subscribe('bookmarks');

    if(selectedTags) {
        return {
            bookmarks: Bookmarks.find().fetch(),
            tags: Tags.find().fetch(),
            selectedTags: selectedTags.trim(),
        };
    }
    else {
        return {
            bookmarks: Bookmarks.find().fetch(),
            tags: Tags.find().fetch(),
        };
    }
    
}, App);

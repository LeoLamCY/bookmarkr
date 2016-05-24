import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';
import { Tags } from '/imports/api/tags.js';

export default createContainer(( {params: { selectedTags }} ) => {
    return {
        bookmarks: Bookmarks.find().fetch(),
        tags: Tags.find().fetch(),
        selectedTags: selectedTags.trim(),
    };
}, App);

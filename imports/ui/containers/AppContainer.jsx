import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';
import { Tags } from '/imports/api/tags.js';

export default createContainer(() => {
    return {
        bookmarks: Bookmarks.find().fetch(),
        tags: Tags.find().fetch(),
    };
}, App);

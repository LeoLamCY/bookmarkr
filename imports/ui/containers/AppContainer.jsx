import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';

export default createContainer(() => {
    return {
        bookmarks: Bookmarks.find({}).fetch(),
    };    
}, App);

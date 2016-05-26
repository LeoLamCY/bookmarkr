import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Sidebar from '../components/Sidebar.jsx';

import { Tags } from '/imports/api/tags.js';

export default createContainer(() => {
    Meteor.subscribe('tags');
    return {
        tags: Tags.find().fetch(),
    };
}, Sidebar);

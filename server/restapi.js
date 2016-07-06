import { Meteor } from 'meteor/meteor';
import { Tags } from '/imports/api/tags.js';
import { Bookmarks } from '/imports/api/bookmarks.js';

var Api = new Restivus({
    prettyJson: true,
    useDefaultAuth: true,
    defaultHeaders: {'Content-Type': 'application/json'},
});

// Api.addCollection(Bookmarks, {
//     excludedEndpoints: ['delete', 'getAll'],

// });

Api.addCollection(Tags, {
    excludedEndpoints: ['delete', 'post', 'put'],
});

Api.addCollection(Meteor.users);

Api.addRoute('bookmarks/:id', {authRequired: false}, {
    get: function() { 
        return Bookmarks.findOne(this.urlParams.id);
    },
    getAll: function() { 
        return Bookmarks.find({}).fetch();
    },
});

Api.addRoute('bookmarks', {authRequired: false}, {
    get: function() { 
        return Bookmarks.find({}).fetch();
    },
    post: {
        action: function () {
            Meteor.call('bookmarks.insert', this.bodyParams.title, this.bodyParams.url, this.bodyParams.tags, this.bodyParams.userId);
            return {status: 'success', data: this.bodyParams};
    }},
});

import { Tags } from '/imports/api/tags.js';
import { Bookmarks } from '/imports/api/bookmarks.js';

var Api = new Restivus({
    prettyJson: true,
});

// Api.addCollection(Bookmarks, {
//     excludedEndpoints: ['delete', 'getAll'],
// });

Api.addCollection(Tags, {
    excludedEndpoints: ['delete', 'post', 'put'],
});

Api.addRoute('bookmarks', {authRequired: false}, {
    get: {
        authRequired: false,
        action: function () {
            return "test";
        }
    },
    post: function () {

    },
    put: function () {
    // PUT api/articles
    },
    patch: function () {
    // PATCH api/articles
    },
    delete: function () {
    // DELETE api/articles
    },
    options: function () {
    // OPTIONS api/articles
    }
});

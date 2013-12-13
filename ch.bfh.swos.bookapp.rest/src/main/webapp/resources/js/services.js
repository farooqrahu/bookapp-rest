'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('Book', ['$resource', function ($resource) {
    return $resource('rest/books/:bookId', {bookId: '@id'}, {
        'update': {method: 'PUT'}
    });
}]);

services.factory('Author', ['$resource', function ($resource) {
    return $resource('rest/authors/:authorId', {authorId: '@id'}, {
        'update': {method: 'PUT'}
    });
}]);

services.factory('UrlLanguageStorage', ['$location', function ($location) {
    return {
        set: function (name, value) {
        },
        get: function (name) {
            return $location.search()['lang']
        }
    };
}]);
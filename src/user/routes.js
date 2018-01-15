'use strict';

const Controller = require('./controller');

module.exports.signUp = {
    method: 'POST',
    path: '/api/v1/user/signUp',
    handler: Controller.signUp,
    config: {
        tags: ['api', 'user'],
        description: 'Register a new user',
    },
};

module.exports.signIn = {
    method: 'POST',
    path: '/api/v1/user/signIn',
    handler: Controller.signIn,
    config: {
        tags: ['api', 'user'],
        description: 'Authenticate a user',
    },
};


module.exports.getById = {
    method: 'GET',
    path: '/api/v1/user/{id}',
    handler: Controller.getById,
    config: {
        tags: ['api', 'user'],
        description: 'Find a user by id',
    },
};

module.exports.update = {
    method: 'PUT',
    path: '/api/v1/user/{id}',
    handler: Controller.update,
    config: {
        tags: ['api', 'user'],
        description: 'Update a user by id',
    },
};

module.exports.delete = {
    method: 'DELETE',
    path: '/api/v1/user/{id}',
    handler: Controller.delete,
    config: {
        tags: ['api', 'user'],
        description: 'Delete a user by id',
    },
};

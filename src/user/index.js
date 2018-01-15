'use strict';

const Routes = require('./routes');

module.exports.routes = [
    Routes.signUp,
    Routes.signIn,
    Routes.getById,
    Routes.update,
    Routes.delete,
];

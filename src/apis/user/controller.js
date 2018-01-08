'use strict';

const boom = require('boom');
const sha256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');
const User = require('./user');

module.exports.signUp = async (request, h) => {
    const user = new User(request.payload);
    user.password = sha256(user.password);

    try {
        await user.save();
        return {user};
    } catch (err) {
        throw boom.badRequest(err.message);
    };
};

module.exports.signIn = async (request, h) => {
    let {password, email} = request.payload;
    password = sha256(password).toString();

    try {
        const user = await User.findOne({email, password});
        const token = jwt.sign(user.toJSON(), 'secret');
        return {token};
    } catch (err) {
        throw boom.badRequest(err.message);
    };
};

module.exports.getById = (request, h) => {
    throw boom.badRequest('Bad Request');
};

module.exports.update = (request, h) => {
    return 'Update a user by id';
};

module.exports.delete = (request, h) => {
    return 'Delete a user by id';
};

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
        return { user };
    } catch (err) {
        throw boom.badRequest(err.message);
    };
};

module.exports.signIn = async (request, h) => {
    let { password, email } = request.payload;
    password = sha256(password).toString();

    try {
        const user = await User.findOne({ email, password });
        const token = jwt.sign(user.toJSON(), 'secret');
        return { token };
    } catch (err) {
        throw boom.badRequest('Invalid email or password');
    };
};

module.exports.getById = async (request, h) => {
    let id = request.params.id;
    let bearer = request.headers.authorization;
    let auxLength = ('Bearer ').length;
    let token = bearer.substring(auxLength, bearer.length);

    try {
        jwt.verify(token, 'secret');
        return await User.findOne({ _id: id, active: true });
    } catch (err) {
        throw boom.badRequest(err);
    }
};

module.exports.update = async (request, h) => {
    let id = request.params.id;
    let bearer = request.headers.authorization;
    let auxLength = ('Bearer ').length;
    let token = bearer.substring(auxLength, bearer.length);

    try {
        jwt.verify(token, 'secret');
        await User.update({ _id: id }, request.payload);
        return await User.findOne({ _id: id });
    } catch (err) {
        throw boom.badRequest(err);
    }
};

module.exports.delete = async (request, h) => {
    let id = request.params.id;
    let bearer = request.headers.authorization;
    let auxLength = ('Bearer ').length;
    let token = bearer.substring(auxLength, bearer.length);

    try {
        jwt.verify(token, 'secret');
        await User.update({ _id: id, active: false });
        return await User.findOne({ _id: id });
    } catch (err) {
        throw boom.badRequest(err);
    }
};

'use strict';

const boom = require('boom');
const jwt = require('jsonwebtoken');
const TokenExtractor = require('./extractor');

module.exports = function () {
    return {
        authenticate: async function (request, h) {
            const token = TokenExtractor.extract(request);

            if (!token) {
                return h.unauthenticated(boom.unauthorized('Header format should be Authorization: Bearer [token]', 'Bearer'));
            }

            try {
                const credentials = jwt.verify(token, 'secret');

                return h.authenticated({ credentials, artifacts: token });
            } catch (err) {
                return h.unauthenticated(boom.unauthorized(err.message, 'Bearer'));
            }
        },
    };
};

'use strict';

const HEADER_AUTHORIZATION = 'authorization';

module.exports.extract = (request) => {
    const authorization = request.headers[HEADER_AUTHORIZATION];

    if (!authorization) {
        return null;
    }

    const parts = authorization.split(' ');

    if (parts.length === 2) {
        const scheme = parts[0];
        const value = parts[1];

        if (/^Bearer$/i.test(scheme)) {
            return value;
        }
    }

    return null;
};

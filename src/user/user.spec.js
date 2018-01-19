'use strict';

const supertest = require('supertest');
const Server = require('../server');
const Database = require('../config/database');
const request = supertest(Server.listener);

describe('User Authentication', () => {
	const email = 'onildo.aguiar@gmail.com';
	const password = 'adm123';
	const wrongPassword = 'adm1234';

	beforeAll(async () => {
		await Database.start();
	});

	it('Should return "200" for a successful login', async () => {
		await request
			.post('/api/v1/user/signIn')
			.send({ email, password })
			.expect(200);
	});

	it('Should return "400" for an unsuccessful login', async () => {
		await request
			.post('/api/v1/user/signIn')
			.send({ email, wrongPassword })
			.expect(400);
	});
});

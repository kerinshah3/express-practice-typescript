import supertest, { Test, Response } from 'supertest';
import TestAgent from 'supertest/lib/agent';
import { defaultErrMsg as ValidatorErr } from 'jet-validator';

import app from '@src/server';

import UserRepo from '@src/repos/UserRepo';
import User, { IUser } from '@src/models/User';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import Paths from 'spec/support/Paths';
import { TReqBody } from 'spec/support/types';


// **** Variables **** //

// StatusCodes
const {
  OK,
  CREATED,
  NOT_FOUND,
  BAD_REQUEST,
} = HttpStatusCodes;

// Dummy update user
const DummyUserData = {
  user: User.new('Gordan Freeman', 'gordan.freeman@gmail.com'),
} as const;


// **** Types **** //

type TRes = Omit<Response, 'body'> & {
  body: {
    users: IUser[];
    error: string;
  }
};


// **** Tests **** //

describe('UserRouter', () => {

  let agent: TestAgent<Test>;

  // Run before all tests
  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });


  // Test add user
  describe(`"POST:${Paths.Users.Add}"`, () => {

    const ERROR_MSG = `${ValidatorErr}"user".`;

    const callApi = (reqBody: TReqBody) => 
      agent
        .post(Paths.Users.Add)
        .type('form').send(reqBody);

    // Test add user success
    it(`should return a status code of "${CREATED}" if the request was ` + 
    'successful.', (done) => {
      // Spy
      spyOn(UserRepo, 'add').and.resolveTo();
      // Call api
      callApi(DummyUserData)
        .end((_: Error, res: TRes) => {
          expect(res.status).toBe(CREATED);
          expect(res.body.error).toBeUndefined();
          done();
        });
    });

    // Missing param
    it('should return a JSON object with an error message of ' + 
    `"${ERROR_MSG}" and a status code of "${BAD_REQUEST}" if the user ` + 
    'param was missing.', (done) => {
      // Call api
      callApi({})
        .end((_: Error, res: TRes) => {
          expect(res.status).toBe(BAD_REQUEST);
          expect(res.body.error).toBe(ERROR_MSG);
          done();
        });
    });
  });
});

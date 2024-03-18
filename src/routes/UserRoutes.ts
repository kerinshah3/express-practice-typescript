import HttpStatusCodes from '../constants/HttpStatusCodes';
import { Document } from 'bson'
import UserService from '../services/UserService';
import * as e from 'express';
import { IReq, IRes } from './types/express/misc';
import logger from "jet-logger";
import {UserRegistrationRequest} from "@src/repos/UserRegistrationRequest";


/**
 * Add one user.
 */
async function add(req: e.Request, res: IRes) {
  const userRequest:UserRegistrationRequest = req.body;
  logger.info(userRequest.requestMetadata.requestId)
  // await UserService.addOne(user);
  return res.status(HttpStatusCodes.CREATED).end();
}

async function all(req: Document, res: IRes) {
  let body:string = req.body;
  const userRequest:UserRegistrationRequest = req.body;
  logger.info(userRequest.requestMetadata.requestId)
  // await UserService.addOne(user);
  return res.status(HttpStatusCodes.CREATED).end();
}
export default {
  add,
  all
} as const;

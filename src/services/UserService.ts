import UserRepo from '@src/repos/UserRepo';
import { IUser } from '@src/models/User';

/**
 * Add one user.
 */
function addOne(user: IUser): Promise<void> {
  return UserRepo.add(user);
}

export default {
  addOne,
} as const;

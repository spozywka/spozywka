import { User } from '../types/api/user';
import { http } from './http.service';

class UserService {
  baseUrl = '/users';

  async getById(id?: number): Promise<User> {
    const res = await http.get<User>(`${this.baseUrl}/${id}`);

    const user = res.data;

    return user;
  }
}

export const userService = new UserService();

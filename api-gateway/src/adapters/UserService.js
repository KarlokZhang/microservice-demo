import got from 'got';

const USER_SERVICE_URI = 'http://user-service:7101';

export default class UserService {
  static async createUser({ email, password }) {
    const body = await got
      .post(`${USER_SERVICE_URI}/users`, {
        json: { email, password },
      })
      .json();
    return body;
  }

  static async fetchUser({ userId }) {
    const body = await got.get(`${USER_SERVICE_URI}/users/${userId}`).json();
    return body;
  }

  static async createUserSession({ email, password }) {
    const body = await got
      .post(`${USER_SERVICE_URI}/sessions`, { json: { email, password } })
      .json();
    return body;
  }
}

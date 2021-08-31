import UserService from '#root/adapters/UserService';

const createUserResolver = async (obj, { email, password }) => {
  return await UserService.createUser({ email, password });
};

export default createUserResolver;

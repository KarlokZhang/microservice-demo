import UserService from '#root/adapters/UserService';

const createUserSessionResolver = async (obj, { email, password }, context) => {
  const userSession = await UserService.createUserSession({ email, password });
  context.res.cookie('userSessionId', userSession.id, { httpOnly: true });
  return userSession;
};

export default createUserSessionResolver;

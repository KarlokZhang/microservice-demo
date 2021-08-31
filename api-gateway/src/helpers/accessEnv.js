// accesses a variable inside of process.env, throwing an error if it's not found
// always run this method in advance (i.e. upon initialisation) so that the error is thrown as early as possible
// caching the values improves performance - accessing process.env many times is bad

const cache = {};

const accessEnv = (key, defaultValue) => {
  // check when key not in env file
  if (!(key in process.env)) {
    // return early when found default value
    if (defaultValue) {
      return defaultValue;
    }
    // throw error when no default value
    throw new Error(`${key} not found in process.env`);
  }

  // if key found, check cache first
  if (cache[key]) {
    return cache[key];
  }

  // if key not found in cache, save it in cache
  cache[key] = process.env[key];
  return process.env[key];
};

export default accessEnv;

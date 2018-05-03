import { User } from '../../models/auth';

const isLoggedIn = () => {
  const user = localStorage.getItem('user');
  return user !== null;
}

const login = (username: string, password: string): Promise<User> => {
  console.log('executing login');
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
// };
//
// return fetch('/users/authenticate', requestOptions).then(handleResponse)
  return Promise.resolve({ username, password, token: 'jwt_token' })
    .then(storeUser);
}

const logout = () => {
  clearUser();
  return Promise.resolve({});
}

const register = (user: User) => {
  console.log('executing register');
  // const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(user)
  //   };
  //
  // return fetch('/users/register', requestOptions).then(handleResponse);
  user.token = 'jwt_token';
  return Promise.resolve(user)
    .then(storeUser);
}

const clearUser = () => localStorage.removeItem('user');

const storeUser = (user: User) => {
  if (user && user.token) {
      localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
}

export const AuthService = {
    isLoggedIn,
    login,
    logout,
    register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

import { API } from '../API';

const signup = async () => {
  const { data } = await API.get('/authentication/token/new');
  window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${window.location.href}`;
};

const login = async ({ username, password }) => {
  const { data: token } = await API.get('/authentication/token/new');

  const { data } = await API.post(`/authentication/token/validate_with_login`, {
    username: username,
    password: password,
    request_token: token.request_token,
  });

  const { data: user } = await API.post(`/authentication/session/new`, {
    request_token: data.request_token,
  });
  localStorage.setItem('session_user', JSON.stringify(user));

  return user;
};

const logout = async (session_id, user) => {
  const { data } = await API.delete(`/authentication/session`, {
    data: {
      session_id: session_id,
    },
  });
  localStorage.setItem('session_user', JSON.stringify(user));
  return data;
};

const getUser = async (session_id) => {
  const { data } = await API.get('/account', {
    params: {
      session_id: session_id,
    },
  });
  return data;
};

export { signup, login, logout, getUser };

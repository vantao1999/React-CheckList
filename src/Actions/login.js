export const login = (phonenumber, password) => {
  return {
    type: 'LOGIN',
    phonenumber: phonenumber,
    password: password,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const signup = (name, phonenumber, password, address, email, avatar) => {
  return {
    type: 'SIGNUP',
    name: name,
    phonenumber: phonenumber,
    password: password,
    address: address,
    email: email,
    avatar: avatar,
  };
};

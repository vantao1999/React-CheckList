const defaultState = {
  isLoggedIn: false,
  name: '',
  phonenumber: '',
  password: '',
  address: '',
  email: '',
  avatar: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoggedIn: true,
        phonenumber: action.phonenumber,
        password: action.password,
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        isLoggedIn: false,
        phonenumber: '',
        password: '',
      });
    case 'SIGNUP':
      return Object.assign({}, state, {
        isLoggedIn: false,
        name: action.name,
        phonenumber: action.phonenumber,
        password: action.password,
        address: action.address,
        email: action.email,
        avatar: action.avatar,
      });
    default:
      return state;
  }
}

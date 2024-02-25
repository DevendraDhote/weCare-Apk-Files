import config from '../config/config';

export const registerAuth = async (username, email, password) => {
  try {
    const response = await fetch(config.register, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error in fetching data', error);
  }
};

export const loginAuth = async (username, email, password) => {
  try {
    const response = await fetch(config.login, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error in fetching data', error);
  }
};

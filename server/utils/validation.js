const isValidEmail = (email) => {
  if (!email) return false;
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isUserNameValid = (username) => {
  if (!username || username.length <= 5) return false;
  const usernameRegex = /^[a-z0-9_.]+$/;
  return usernameRegex.test(username) && username.length > 5;
};

const isValidPassword = (password) => password && password.length > 5;

module.exports = { isUserNameValid, isValidEmail, isValidPassword };

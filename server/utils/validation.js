const isValidEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const isUserNameValid = (username) => {
  const usernameRegex = /^[a-z0-9_.]+$/;
  return username && username.length > 5 && usernameRegex.test(username);
};

const isValidPassword = (password) => password && password.length > 5;

module.exports = { isUserNameValid, isValidEmail, isValidPassword };

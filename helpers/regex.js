const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  
const passwordRegex = /^\S*$/;

const mobilePhoneRegex = /^\+380\d{2}\d{3}\d{2}\d{2}$/;

module.exports = { emailRegex, passwordRegex, mobilePhoneRegex };

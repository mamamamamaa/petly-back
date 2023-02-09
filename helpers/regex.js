const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex = /^\S*$/;

const mobilePhoneRegex = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;

module.exports = { emailRegex, passwordRegex, mobilePhoneRegex };

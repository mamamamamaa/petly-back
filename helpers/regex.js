const nameRegex = /^(?=.{2,16}$)([- A-Za-z])*$/;
const emailRegex =
 /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const passwordRegex = 
// /^\S*$/;
/^(?=.{7,32})([\S])*$/;
// /^(?=.{7,32}$)([0-9A-Za-z])*$/;
const mobilePhoneRegex = 
// /^\+380\d{2}\d{3}\d{2}\d{2}$/;
/^\+380[0-9]{9}$/;
const dateRegex =
  /(^(0+?[1-9]|[12][0-9]|3[01])[-\\.](0+?[1-9]|[1][0-12])[-\\.]((19|20)\d\d))/;
const cityRegex =
  /^(([a-zA-Z]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Z](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/;
  const priceRegex = /^[1-9]+[0-9]*$/;
  const userNameRegex =
  /^([a-zA-Zа-яА-Я]{1}|([a-zA-Zа-яА-Я]{1,}['-]?[a-zA-Zа-яА-Я][\s]?)+)+$/;

module.exports = { nameRegex, emailRegex, passwordRegex, mobilePhoneRegex, dateRegex, priceRegex,cityRegex, userNameRegex };

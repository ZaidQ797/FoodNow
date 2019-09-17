const images = {
  Register: require("./images/registerBg.jpg"),
  Signup: require("./images/signupBg.jpg"),
  Transparent: require("./images/transparent.png"),
  LoginBG: require("./images/login.png"),
  Lock: require("./images/lock.png"),
  Badge: require("./images/badge.png"),
  Food: require("./images/food.png"),
  MotorCycle: require("./images/motorcycle.png")
};
export default image => images[image];

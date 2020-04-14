export var numberChecker = function(userInput) {
  if (typeof(userInput) === "number" && userInput < 10 && userInput > 0) {
    return userInput
  }
};
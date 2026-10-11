function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};

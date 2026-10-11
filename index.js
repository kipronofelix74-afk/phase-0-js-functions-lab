function calculateTax(amount) {
  return amount * 0.1;
}
console.log(calculateTax(200)); 

function convertToUpperCase(text) {
  return text.toUpperCase();
}
console.log(convertToUpperCase("hello"));

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(findMaximum(7, 12));

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}
console.log(isPalindrome("hello"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}
console.log(calculateDiscountedPrice(100, 20));  



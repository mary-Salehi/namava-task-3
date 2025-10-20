const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function convertToPersianNumbers(number) {
  return number.toString().replace(/\d/g, d => farsiDigits[d]);
}

export function convertToLatinNumbers(str) {
  return str.replace(/[۰-۹]/g, d => farsiDigits.indexOf(d));
}

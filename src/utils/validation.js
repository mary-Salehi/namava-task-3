import { numbersRegex, passwordRegex, usernameRegex } from "../constants/regex";

export const isValidUsername = (username) => usernameRegex.test(username);
export const isValidPassword = (password) => passwordRegex.test(password);
export const isOnlyNumbers = (text) => numbersRegex.test(text);

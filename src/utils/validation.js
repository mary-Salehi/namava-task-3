import { passwordRegex, usernameRegex } from "../constants/regex";

export const isValidUsername = (username) => usernameRegex.test(username);
export const isValidPassword = (password) => passwordRegex.test(password);
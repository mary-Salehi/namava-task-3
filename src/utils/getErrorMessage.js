export const getErrorMessage = (error) => {
  switch (error) {
    case "Invalid username or password":
      return "نام کاربری یا رمز ورودی صحیح نیست.";
    case "Invalid Username":
      return "نام کاربری صحیح نیست.";
    case "Network Error":
      return "مشکل در اتصال به اینترنت";
    case "Invalid phone number":
      return "شماره تلفن همراه صحیح نیست.";
    default:
      return "مشکلی رخ داده";
  }
};

import toast from "react-hot-toast";
import { useLogin } from "../../../hooks/useLogin";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import DangerIcon from "../../icons/DangerIcon";
import { useNavigate } from "react-router-dom";
import { isValidPassword, isValidUsername } from "../../../utils/validation";
import TextField from "../../../ui/textField";

function LoginForm() {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      isValidUsername(userData.UserName) &&
      isValidPassword(userData.Password)
    ) {
      setIsDisabled(false);
    }
  }, [userData.Password, userData.UserName]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { sendUserData, isLoading, isSucceeded, error } = useLogin();

  const submitData = (e) => {
    e.preventDefault();

    const formattedUserData = {
      ...userData,
      UserName: userData.UserName.startsWith("09")
        ? userData.UserName.replace("0", "+98")
        : userData.UserName,
    };

    sendUserData(formattedUserData);
  };

  const getErrorMessage = (error) => {
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

  useEffect(() => {
    const errorMessage = getErrorMessage(error);
    if (error) {
      toast.error(
        <div className={classes.toastContainer}>
          <DangerIcon className={classes.dangerIcon} />
          <span>{errorMessage}</span>
        </div>,
        {
          className: classes.errorToast,
          icon: null,
          duration: 5000,
        }
      );
    }
  }, [error]);

  useEffect(() => {
    if (isSucceeded) {
      navigate("/");
    }
  }, [isSucceeded]);

  return (
    <form onSubmit={submitData}>
      <TextField
        label="شماره تلفن همراه یا ایمیل"
        type="text"
        placeholder="شماره تلفن همراه یا ایمیل"
        name="UserName"
        value={userData.UserName}
        onChange={handleChange}
        className={classes.inputContainer}
      />
      <TextField
        label="رمز عبور"
        type="text"
        placeholder="رمز عبور"
        name="Password"
        value={userData.Password}
        onChange={handleChange}
        className={classes.inputContainer}
      />
      <button
        disabled={isLoading ? true : isDisabled}
        type="submit"
        className={classes.submitBtn}
      >
        {isLoading ? <span>....</span> : <span>ورود</span>}
      </button>
    </form>
  );
}

export default LoginForm;

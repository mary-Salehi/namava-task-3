import toast from "react-hot-toast";
import { useLogin } from "../../../hooks/useLogin";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import DangerIcon from "../../icons/DangerIcon";
import { useNavigate } from "react-router-dom";
import { isValidPassword, isValidUsername } from "../../../utils/validation";
import TextField from "../../../ui/textField";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";
import Spinner from "./lottinAnimation/spinner";
import { convertToLatinNumbers } from "../../../utils/convertNumbers";

function LoginForm() {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });

  const navigate = useNavigate();

  const isFormValid =
    isValidUsername(userData.UserName) && isValidPassword(userData.Password);

  const handleInputChange = (e) => {
    const latinValue = convertToLatinNumbers(e.target.value);
    setUserData({ ...userData, [e.target.name]: latinValue });
  };

  const { sendUserData, isLoading, isSucceeded, error } = useLogin();

  const submitData = (e) => {
    e.preventDefault();

    const formattedUserData = {
      ...userData,
      UserName: formatPhoneNumber(userData.UserName),
    };

    sendUserData(formattedUserData);
  };

  useEffect(() => {
    if (error) {
      const errorMessage = getErrorMessage(error);
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
        onChange={handleInputChange}
        className={classes.inputContainer}
        phoneIcon={true}
      />
      <TextField
        label="رمز عبور"
        type="password"
        placeholder="رمز عبور"
        name="Password"
        value={userData.Password}
        onChange={handleInputChange}
        className={classes.inputContainer}
        passwordIcon={true}
      />
      <button
        disabled={isLoading || !isFormValid}
        type="submit"
        className={classes.submitBtn}
      >
        {isLoading ? <Spinner /> : <span>ورود</span>}
      </button>
    </form>
  );
}

export default LoginForm;

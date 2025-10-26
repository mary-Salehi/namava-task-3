import toast from "react-hot-toast";
import { useLogin } from "../../../hooks/useLogin";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import DangerIcon from "../../icons/DangerIcon";
import { isValidPassword, isValidUsername } from "../../../utils/validation";
import TextField from "../../../ui/textField";
import getErrorMessage from "../../../utils/getErrorMessage";
import formatPhoneNumber from "../../../utils/formatPhoneNumber";
import Spinner from "./lottinAnimation/spinner";
import { convertToLatinNumbers } from "../../../utils/convertNumbers";
import convertObjectKeysToPascal from "../../../utils/convertObjectKeysToPascal";

function LoginForm() {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const isFormValid =
    isValidUsername(userData.userName) && isValidPassword(userData.password);

  const handleInputChange = (e) => {
    const latinValue = convertToLatinNumbers(e.target.value);
    setUserData({ ...userData, [e.target.name]: latinValue });
  };

  const { login, isLoading, error } = useLogin();

  const submitData = (e) => {
    e.preventDefault();

    const formattedUserData = {
      ...userData,
      userName: formatPhoneNumber(userData.userName),
    };

    const pascalCaseUserData = convertObjectKeysToPascal(formattedUserData);
    login(pascalCaseUserData);
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

  return (
    <form onSubmit={submitData}>
      <TextField
        label="شماره تلفن همراه یا ایمیل"
        type="text"
        placeholder="شماره تلفن همراه یا ایمیل"
        name="userName"
        value={userData.userName}
        onChange={handleInputChange}
        className={classes.inputContainer}
        showNumberPrefix={true}
      />
      <TextField
        label="رمز عبور"
        type="password"
        placeholder="رمز عبور"
        name="password"
        value={userData.password}
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

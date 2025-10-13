import toast from "react-hot-toast";
import apiService from "../../../services/apiService";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";

const END_POINT = "/v2.0/accounts/login";

function LoginForm() {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let usernameREgex = /^(09\d{9}|\w+@\w+\.\w{2,})$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  useEffect(() => {
    if (
      usernameREgex.test(userData.UserName) &&
      passwordRegex.test(userData.Password)
    ) {
      setIsDisabled(false)
    }
  } , [userData.Password , userData.UserName])

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true)
    try {
      const response = await apiService({
        endpoint: END_POINT,
        data: userData,
      });
      console.log(response);
      if (response.data.error) {
        toast.error('نام کاربری یا رمز ورودی صحیح نیست')
      }
      console.log(response.data.error.message);
      
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.inputContainer}>
        <label>شماره تلفن همراه یا ایمیل</label>
        <input
          type="text"
          placeholder="شماره تلفن همراه یا ایمیل"
          value={userData.UserName}
          name="UserName"
          onChange={handleChange}
        />
      </div>
      <div className={classes.inputContainer}>
        <label>رمز عبور</label>
        <input
          type="text"
          placeholder="رمز عبور"
          value={userData.Password}
          name="Password"
          onChange={handleChange}
        />
      </div>
      <button disabled={isDisabled} type="submit" className={classes.submitBtn}>
        {isLoading ? <span>....</span> : <span>ورود</span>}
      </button>
    </form>
  );
}

export default LoginForm;

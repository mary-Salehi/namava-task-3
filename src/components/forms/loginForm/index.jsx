import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import { useLogin } from "../../../hooks/useLogin";


function LoginForm() {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

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

  const {sendUserData , isLoading , isSucceeded , error} = useLogin()

  const submitData = (e) => {
    e.preventDefault();
    sendUserData(userData)
  }

  useEffect(() => {
    if (isSucceeded) {
      console.log('needs navigation',isSucceeded);
    }
  } , [isSucceeded])
  
  return (
    <form onSubmit={submitData}>
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
      <button disabled={isLoading ? true : isDisabled} type="submit" className={classes.submitBtn}>
        {isLoading ? <span>....</span> : <span>ورود</span>}
      </button>
    </form>
  );
}

export default LoginForm;

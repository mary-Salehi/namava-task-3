import { useStyles } from "./styles";
import { useState } from "react";

function LoginForm() {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("jdhgjhdg");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.inputContainer}>
        <label>شماره تلفن همراه یا ایمیل</label>
        <input
          type="text"
          placeholder="شماره تلفن همراه یا ایمیل"
          value={userData.phone}
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div className={classes.inputContainer}>
        <label>رمز عبور</label>
        <input
          type="text"
          placeholder="رمز عبور"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={classes.submitBtn}>
        ورود
      </button>
    </form>
  );
}

export default LoginForm;

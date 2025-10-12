import { Link } from "react-router-dom";
import NamavaLogo from "../icons/NamavaLogo";
import { useStyles } from "./styles";
import EnterIcon from "../icons/EnterIcon";
import LoginForm from "../forms/loginForm";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <NamavaLogo className={classes.namavaLogo} />
        <Link className={classes.register}>ثبت نام</Link>
      </div>
      <div className={classes.enter}>
        <EnterIcon />
        <span>ورود</span>
      </div>
      <p className={classes.text}>
        لطفا شماره تلفن همراه یا ایمیل خود را وارد کنید.
      </p>
      <LoginForm />
      <Link className={classes.link}>ورود با رمز یکبار مصرف</Link>
      <Link className={classes.link}>رمز عبور خود را فراموش کرده‌ام.</Link>
    </div>
  );
}

export default Login;

import NamavaLogo from "../icons/NamavaLogo";
import { useStyles } from "./styles";
import EnterIcon from "../icons/EnterIcon";
import LoginForm from "../forms/loginForm";
import LinkButton from "../../ui/linkButton";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <LinkButton path="/">
          <NamavaLogo className={classes.namavaLogo} />
        </LinkButton>
        <LinkButton className={classes.register}>ثبت نام</LinkButton>
      </div>
      <div className={classes.enter}>
        <EnterIcon />
        <span>ورود</span>
      </div>
      <p className={classes.text}>
        لطفا شماره تلفن همراه یا ایمیل خود را وارد کنید.
      </p>
      <LoginForm />
      <LinkButton className={classes.link}>ورود با رمز یکبار مصرف</LinkButton>
      <LinkButton className={classes.link}>
        رمز عبور خود را فراموش کرده‌ام.
      </LinkButton>
    </div>
  );
}

export default Login;

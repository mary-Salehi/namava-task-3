import LoginForm from "../../components/forms/loginForm";
import EnterIcon from "../../components/icons/EnterIcon";
import NamavaLogo from "../../components/icons/NamavaLogo";
import LinkButton from "../../ui/linkButton";
import { useStyles } from "./styles";

function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
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
    </div>
  );
}

export default LoginPage;

import { Link } from "react-router-dom";
import { useStyles } from "./styles";

function LoginForm() {
  const classes = useStyles();
  return (
    <form>
      <div className={classes.inputContainer}>
        <label htmlFor="">شماره تلفن همراه یا ایمیل</label>
        <input type="text" placeholder="شماره تلفن همراه یا ایمیل" />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="">رمز عبور</label>
        <input type="text" placeholder="رمز عبور" />
      </div>
      <Link className={classes.submitBtn}>ورود</Link>
    </form>
  );
}

export default LoginForm;

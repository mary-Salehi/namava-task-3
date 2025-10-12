import Login from '../../components/login'
import { useStyles } from './styles'

function LoginPage() {
  const classes =  useStyles();

  return (
    <div className={classes.wrapper}>
      <Login/>
    </div>
  )
}

export default LoginPage
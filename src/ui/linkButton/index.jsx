import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import classNames from "classnames";

function LinkButton({ children, className, path }) {
  const classes = useStyles();
  return (
    <Link to={path} className={classNames(classes.link, className)}>
      {children}
    </Link>
  );
}

export default LinkButton;

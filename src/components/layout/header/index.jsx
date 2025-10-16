import { Link } from "react-router-dom";
import { navLinks } from "../../../constants/navLinks";
import { useStyles } from "./styles";
import NamavaLogo from "../../icons/NamavaLogo";
import SearchIcon from "../../icons/SearchIcon";
import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/handleCookie";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkToken = () => {
      let hasToken = getCookie("token");
      hasToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    };
    checkToken();
    const interval = setInterval(checkToken, 60000);
    return () => clearInterval(interval);
  }, []);

  const classes = useStyles();
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.navContent}>
          <NamavaLogo className={classes.navLogo} />
          <ul className={classes.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link className={classes.navLink} to={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.navActions}>
          <SearchIcon className={classes.headerIcon} />
          {!isLoggedIn ? (
            <div className={classes.ring}>
              <div className={classes.accountProfile}></div>
            </div>
          ) : (
            <Link to="/login" className={classes.loginBtn}>
              ورود / ثبت نام
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

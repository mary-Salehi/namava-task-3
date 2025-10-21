import { Link } from "react-router-dom";
import { navLinks } from "../../../constants/navLinks";
import { useStyles } from "./styles";
import NamavaLogo from "../../icons/NamavaLogo";
import SearchIcon from "../../icons/SearchIcon";
import { useState } from "react";
import { deleteCookie, getCookie } from "../../../utils/handleCookie";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie("token"));

  const handleDeleteCookie = () => {
    deleteCookie("token");
    setIsLoggedIn(false);
  };

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
          {isLoggedIn ? (
            <div className={classes.flexRow}>
              <button
                onClick={handleDeleteCookie}
                className={classes.logoutContainer}
              >
                <span>خروج از حساب کاربری</span>
              </button>
              <div className={classes.ring}>
                <img
                  src="src/assets/images/userProfile.png"
                  className={classes.accountProfile}
                />
              </div>
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

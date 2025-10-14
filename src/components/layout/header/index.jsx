import { Link } from "react-router-dom";
import { navLinks } from "../../../constants/navLinks";
import { useStyles } from "./styles";
import NamavaLogo from "../../icons/NamavaLogo";
import SearchIcon from "../../icons/SearchIcon";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.navContent}>
          <NamavaLogo className={classes.navLogo}/>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;

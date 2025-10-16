import { createUseStyles } from "react-jss";
import { theme } from "../../../styles/theme";

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
    // transform: ({ isHeaderFixed }) =>
    //   isHeaderFixed ? "translateY(0)" : "translateY(-100%)",
    transition: "all 0.5s ease",
    background: "linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0) 100%)",
    display: "flex",
    alignItems: "strech",
    justifyContent: "space-between",
    padding: "15px 24px 15px 32px",
    fontSize: "12px",
    [theme.mq(theme.breakpoints.desktop)]: {
      padding: "20px 42px",
    },
  },

  navContent: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    width: "auto",
  },

  navLogo: {
    fill: theme.colors.white,
    display: "flex",
    [theme.mq(theme.breakpoints.desktop)]: {
      width: "64px",
      height: "auto",
    },
  },

  navList: {
    color: theme.colors.white,
    display: "flex",
    gap: "18px",

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "32px",
    },
    height: "100%",
  },

  navLink: {
    "&:hover": {
      color: theme.colors.blue,
    },
    display: "inline-block",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  userProfile: {
    borderRadius: "100%",

    "& img": {
      width: "100%",
    },
  },

  headerIcon: {
    color: theme.colors.white,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "30px",
    height: "30px",

    [theme.mq(theme.breakpoints.desktop)]: {
      width: "40px",
      height: "40px",
    },
  },

  loginBtn: {
    color: theme.colors.white,
    backgroundColor: "rgba(168, 167, 167, 0.1)",
    padding: [12, 10],
    borderRadius: 12,
    cursor: "pointer",
    fontSize: 12,

    "&:hover": {
      backgroundColor: theme.colors.mainBlue,
    },

    [theme.mq(theme.breakpoints.tablet)]: {
      fontSize: 14,
    },
  },

  accountProfile: {
    width: 25,
    height: 25,
    borderRadius: "100%",
    backgroundColor: theme.colors.gray4,
  },

  ring: {
    width: 30,
    height: 30,
    borderRadius: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: '1px solid red'
  },
};

export const useStyles = createUseStyles(styles);

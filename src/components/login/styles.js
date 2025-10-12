import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  login: {
    padding: [40, 24],
    margin: "0 auto",
    backgroundColor: theme.colors.white,

    [theme.mq(theme.breakpoints.tablet)]: {
      padding: [40, 60],
      boxShadow: `0 0 8px 0 ${theme.colors.gray3}`,
      width: 500,
      borderRadius: 12,
    },
  },

  namavaLogo: {
    fill: theme.colors.mainBlue,
  },

  register: {
    fontSize: 12,
    fontWeight: 700,
    color: theme.colors.mainBlue,
    cursor: "pointer",
    position: "absolute",
    left: 0,

    "&:hover": {
      color: "rgba(0, 95, 180, 0.9)",
    },

    [theme.mq(theme.breakpoints.tablet)]: {
      fontSize: 14,
    },
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 32,
  },

  enter: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: theme.colors.gray7,
    marginBottom: 24,

    "& span": {
      fontSize: 14,
      fontWeight: 700,

      [theme.mq(theme.breakpoints.tablet)]: {
        fontSize: 20,
      },
    },
  },

  text: {
    fontSize: 12,
    color: theme.colors.gray4,
    marginBottom: 24,

    [theme.mq(theme.breakpoints.tablet)]: {
      fontSize: 16,
    },
  },

  link: {
    display: "block",
    textAlign: "center",
    padding: 10,
    fontSize: 12,
    fontWeight: 700,
    color: theme.colors.mainBlue,
    marginBottom: 12,

    [theme.mq(theme.breakpoints.tablet)]: {
      fontSize: 14,
      marginBottom: 20,
    },
  },
};
export const useStyles = createUseStyles(styles);

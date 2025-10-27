import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  wrapper: {
    backgroundColor: "#f2f2f2",

    [theme.mq(theme.breakpoints.tablet)]: {
      padding: 199,
    },

    [theme.mq(theme.breakpoints.desktop)]: {
      padding: 42,
    },
  },

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
    position: "absolute",
    left: 0,
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
    padding: 10,
    marginBottom: 12,

    [theme.mq(theme.breakpoints.tablet)]: {
      marginBottom: 20,
    },
  },
};
export const useStyles = createUseStyles(styles);

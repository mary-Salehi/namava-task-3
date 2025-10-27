import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  link: {
    display: "block",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 700,
    color: theme.colors.mainBlue,

    "&:hover": {
      color: "rgba(0, 95, 180, 0.9)",
    },

    [theme.mq(theme.breakpoints.tablet)]: {
      fontSize: 14,
    },
  },
};
export const useStyles = createUseStyles(styles);

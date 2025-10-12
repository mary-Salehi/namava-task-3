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
};
export const useStyles = createUseStyles(styles);

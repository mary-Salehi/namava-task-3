import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: `solid 1px ${theme.colors.gray2}`,
    borderRadius: 12,
    padding: [10, 12],
    transition: "border-color 0.1s ease",
    height: 40,

    [theme.mq(theme.breakpoints.tablet)]: {
      height: 52,
    },

    "&:focus-within": {
    borderColor: theme.colors.black,
  },
  },

  numberPrefix: {
    borderRight: `1px solid ${theme.colors.gray8}`,
    paddingRight: 6,
    fontSize: 14,
  },

  showPassBtn: {
    display: 'flex',
    cursor: 'pointer',
  },
};

export const useStyles = createUseStyles(styles);

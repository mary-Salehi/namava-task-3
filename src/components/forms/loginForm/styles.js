import { createUseStyles } from "react-jss";
import { theme } from "../../../styles/theme";

const styles = {
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 24,

    "& label": {
      fontSize: 12,
      color: theme.colors.gray7,
      marginBottom: 8,

      [theme.mq(theme.breakpoints.tablet)]: {
        fontSize: 14,
      },
    },

    "& input": {
      width: '100%',

      [theme.mq(theme.breakpoints.tablet)]: {
        fontSize: 14,
      },

      "&::placeholder": {
        fontSize: 12,
        color: theme.colors.gray3,
        textAlign: 'right',

        [theme.mq(theme.breakpoints.tablet)]: {
          fontSize: 14,
        },
      },
    },
  },

  submitBtn: {
    display: "block",
    width: '100%',
    height: 40,
    textAlign: "center",
    fontSize: 12,
    backgroundColor: theme.colors.mainBlue,
    color: theme.colors.white,
    borderRadius: 12,
    padding: [10, 12],
    cursor: "pointer",
    marginTop: 32,
    marginBottom: 12,

    '&:disabled': {
      backgroundColor: theme.colors.gray3,
      cursor: 'default',
      
    },

    [theme.mq(theme.breakpoints.tablet)]: {
      fontSize: 14,
      height: 42,
    },
  },
};
export const useStyles = createUseStyles(styles);

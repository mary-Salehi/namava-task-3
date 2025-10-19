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
      border: `solid 1px ${theme.colors.gray2}`,
      borderRadius: 12,
      padding: [10, 12],
      transition: "border-color 0.1s ease",

      [theme.mq(theme.breakpoints.tablet)]: {
        fontSize: 14,
      },

      "&::placeholder": {
        fontSize: 12,
        color: theme.colors.gray3,

        [theme.mq(theme.breakpoints.tablet)]: {
          fontSize: 14,
        },
      },

      "&:focus": {
        borderColor: theme.colors.black,
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

  toastContainer : {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },

  errorToast: {
    fontSize: 14,
    color: theme.colors.white,
    backgroundColor: theme.colors.red,
    borderRadius: 12,
    padding: [12, 8]
  },

  dangerIcon: {
    fill: theme.colors.white,
    width: 24,
    height: 24,
  }
};
export const useStyles = createUseStyles(styles);

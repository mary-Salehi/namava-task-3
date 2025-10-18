import { createUseStyles } from "react-jss";

const styles = {
  img: {
    display: 'block',
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  }
}

export const useStyles = createUseStyles(styles);

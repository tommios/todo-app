import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  userInfo: {
    height: "auto",
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#ffffff",
    color: "#0055ff",
    fontSize: "150%",
  },
  avatar: {
    margin: "auto",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));

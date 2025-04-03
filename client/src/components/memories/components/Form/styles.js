import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#1e88e5",
    },
  },
  "@media (max-width: 600px)": {
    paper: {
      padding: theme.spacing(2),
    },
  },
}));

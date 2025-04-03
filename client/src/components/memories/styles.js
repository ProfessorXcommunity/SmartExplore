import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    transition: "all 0.3s ease-in-out",
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  image: {
    marginLeft: "15px",
  },
  memoryBg: {
    minHeight: "100vh",
    backgroundImage: `url(${require("../../images/bg1.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(4),
  },
}));

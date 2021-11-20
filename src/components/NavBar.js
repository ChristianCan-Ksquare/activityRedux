import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { logOut } from "../features/authentication/authenticationThunks";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthentication } from "../features/authentication/authenticationSelectors";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#2E67F8",
    height: 50,
  },
  link: {
    color: "#FFFFFF",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const isAuthenticated = useSelector(selectAuthentication);
  const dispatch = useDispatch();

  const handleSubmitLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className={classes.navBar}
      mb={2}
    >
      <Box display="flex">
        <Box className={classes.link} mx={4}>
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
            Landing Page
          </Link>
        </Box>
        <Box className={classes.link} mx={4}>
          <Link
            to="/posts"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Posts
          </Link>
        </Box>
      </Box>
      <Box className={classes.link} mr={4}>
        {isAuthenticated === 1 ? (
          <Link
            to="/"
            className={classes.link}
            onClick={handleSubmitLogOut}
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Log In
          </Link>
        )}
      </Box>
    </Box>
  );
}

export default NavBar;

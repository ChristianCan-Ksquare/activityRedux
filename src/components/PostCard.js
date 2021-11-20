import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postsThunks";
import { selectAuthentication } from "../features/authentication/authenticationSelectors";
import { selectPosts } from "../features/posts/postsSelectors";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

function PostCard(props) {
  const classes = useStyles();
  const { id, title, description } = props;
  const isAuthenticated = useSelector(selectAuthentication);
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (posts.length > 1) {
      dispatch(deletePost(parseInt(id, 10)));
    } else {
      alert("There must be at least 1 Post in the page!");
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {description}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          mt={2}
          className={classes.link}
        >
          <Link to={`/posts/${id}`}>
            <Button variant="contained" color="primary">
              Read
            </Button>
          </Link>
          {isAuthenticated === 1 ? (
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
            >
              Remove
            </Button>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostCard;

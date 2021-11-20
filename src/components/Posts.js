import { Fragment, useEffect } from "react";
import { Box, Grid, Button, CircularProgress } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import PostCard from "./PostCard";
import { getPosts } from "../features/posts/postsThunks";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default function Posts() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [dispatch, posts.length]);

  const refetchPosts = () => {
    dispatch(getPosts());
  };

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There was an error fetching the information!
        <div>
          <Button variant="outlined" onClick={refetchPosts}>
            Click to refetch
          </Button>
        </div>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Fragment>
      <Grid container spacing={2} className={classes.gridContainer}>
        {posts.map((element, index) => (
          <Grid key={element.id} item xs={12} sm={6} md={3}>
            <PostCard
              key={element.id}
              id={element.id}
              title={element.title}
              description={element.body}
            />
          </Grid>
        ))}
      </Grid>
      <Box size="large" display="flex" justifyContent="center" mb={2}>
        <Link to={`/createPost`}>
          <Button variant="contained" color="secondary">
            Add a new Post
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
}

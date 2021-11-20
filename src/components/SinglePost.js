import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useHistory, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useParams } from "react-router";
import { useEffect } from "react";
import { selectSpecificPost } from "../features/posts/postsSelectors";
import { setSelectedPost } from "../features/posts/postsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function PostCard() {
  const { id } = useParams();

  let Id = parseInt(id, 10);

  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedPost(Id));
  }, [dispatch, Id]);

  const post = useSelector(selectSpecificPost);

  return id > 100 ? (
    <Redirect to="/error_404" />
  ) : (
    <Box m={4} textAlign="center">
      <Typography gutterBottom variant="h6" component="h2">
        {`Post #${post?.id}`}
      </Typography>
      <Typography gutterBottom variant="h4" component="h2">
        {post?.title}
      </Typography>
      <Typography variant="body2" color="textPrimary" component="p">
        {post?.body}
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.goBack()}
        >
          Return
        </Button>
      </Box>
    </Box>
  );
}

export default PostCard;

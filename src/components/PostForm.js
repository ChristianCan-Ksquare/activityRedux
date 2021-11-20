import {
  Button,
  CircularProgress,
  Box,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postPost } from "../features/posts/postsThunks";
import { selectPostsLoading } from "../features/posts/postsSelectors";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  FormControl: {
    marginBottom: 20,
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
  crawl: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2E67F8",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
}));

export default function TodosForm() {
  const classes = useStyles();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const isLoading = useSelector(selectPostsLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPost({ title: postTitle, body: postBody }));
    history.push("/posts");
  };

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Box
        component="form"
        border={1}
        borderRadius={16}
        borderColor="primary"
        padding={2}
        style={{ display: "flex", flexDirection: "column" }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid item>
          <TextField
            required
            variant="outlined"
            id="outlined-name"
            label="Title"
            placeholder="Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
            fullWidth
            className={classes.field}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            variant="outlined"
            id="outlined-name"
            label="Body"
            placeholder="Body"
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
            fullWidth
            className={classes.field}
            multiline
            minRows={6}
          />
        </Grid>

        <Button
          type="submit"
          disabled={isLoading}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          {isLoading ? <CircularProgress size="1.5rem" /> : "Submit"}
        </Button>
      </Box>
    </Grid>
  );
}

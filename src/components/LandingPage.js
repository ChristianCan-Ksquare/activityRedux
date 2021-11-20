import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function LandingPage() {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3" color="textPrimary">
          Welcome to Christian Can's Blog!
        </Typography>
      </Box>
      <Box m={2}>
        <Typography variant="h6" color="textPrimary">
          Here you will find multiple posts about different topics, thank you
          for visiting my blog!
        </Typography>
      </Box>
    </Box>
  );
}

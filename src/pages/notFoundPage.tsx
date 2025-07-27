import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () =>  {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#fff"
      px={2}
    >
      <Typography variant="h1" fontWeight="bold" color="text.primary">
        404
      </Typography>
      <Typography variant="h5" mt={2} color="text.secondary">
        Page Not Found
      </Typography>
      <Typography variant="body1" mt={1} color="text.secondary">
        The page you are looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 4, textTransform: "none" }}
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}

export default NotFoundPage;
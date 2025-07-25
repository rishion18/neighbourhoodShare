import { Box } from "@mui/material";
import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: { xs: 2, sm: 4, md: 6 },
        mt: 8,
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;

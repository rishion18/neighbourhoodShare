import { Container } from "@mui/material";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  disableGutters?: boolean;
}

const PageContainer = ({ 
  children, 
  maxWidth = "xl", 
  disableGutters = false 
}: PageContainerProps) => {
  return (
    <Container 
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        py: 3,
        px: { xs: 2, sm: 3 }, 
         width: "81%", margin: 'auto'
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
import { Box, Skeleton } from "@mui/material";
import { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
};

const Image = ({
  src,
  alt = "",
  height = 200,
  width = "100%",
  style = {},
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      sx={{
        height,
        width,
        position: "relative",
        overflow: "hidden",
        borderRadius: 1,
        ...style,
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          height="100%"
          width="100%"
          animation="wave"
        />
      )}
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        sx={{
          display: loaded ? "block" : "none",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </Box>
  );
};

export default Image;

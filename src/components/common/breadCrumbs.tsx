import { Box, Typography, Link } from "@mui/material";

type BreadcrumbItem = {
  title: string;
  url?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Box sx={{ mb: 2, display: "flex", gap: 1, flexWrap: "wrap", paddingX:'16px' }}>
      {items.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          {item.url ? (
            <Link href={item.url} underline="hover" color="primary">
              {item.title}
            </Link>
          ) : (
            <Typography color="text.primary">{item.title}</Typography>
          )}
          {index < items.length - 1 && <Typography mx={0.5}>/</Typography>}
        </Box>
      ))}
    </Box>
  );
};

export default Breadcrumb;

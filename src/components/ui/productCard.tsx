import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import Image from "../common/image";

export type Item = {
  id: string;
  name: string;
  description: string;
  category: string;
  owner: string;
  condition: string;
  available: boolean;
  image: string;
  borrowedBy: string | null;
  sold: boolean;
};

type Props = {
  product: Item;
};

const ItemCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
        mt: 2,
        width: "100%",
        maxWidth: 400,
        boxShadow: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%", 
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        height={192}
        style={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography variant="h6" color="text.primary">
            {product.name}
          </Typography>
          {product.available && (
            <Chip
              label="Available"
              variant="outlined"
              size="small"
              sx={{
                color: "success.main",
                borderColor: "success.light",
                backgroundColor: "success.lighter",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography
          variant="caption"
          color="text.disabled"
          sx={{ display: "block", mt: 1 }}
        >
          Owner: {product.owner} | Condition: {product.condition}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end", pt: 0 }}>
        <Button
          size="small"
          variant="text"
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              style={{ height: 16, width: 16 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          }
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;

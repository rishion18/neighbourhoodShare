// pages/item/[id].tsx
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import PageContainer from "../../layouts/pageContainer";
import Breadcrumb from "../../common/breadCrumbs";
import { useParams } from "react-router-dom";
import { useItems } from "../../../hooks/useItems";
import type { Item } from "../../../redux/slices/item.slice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createRequest, type BorrowRequest } from "../../../redux/slices/requests.slice";

const ItemDetailPage = () => {
  const { id } = useParams();
  const { items } = useItems();
  const [item, setItem] = useState<Item | null>(null);
  const dispatch = useDispatch();
  const requests = useSelector((state:any) => state.requests);

  useEffect(() => {
    if (Array.isArray(items) && items.length > 0 && id) {
      const item = items.find((itm: Item) => itm.id === id);
      setItem(item || null);
    }
  }, [id, items]);

  if (!item) {
    return <Typography>Item not found.</Typography>;
  }

  const existingRequest = requests.find(
    (r:BorrowRequest) => r.itemId === item.id && r.status !== "cancelled"
  );

  const breadcrumbItems = [
    { title: "Home", url: "/" },
    { title: item.name },
  ];

  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "16px",
          gap: 4,
        }}
      >
        <Card sx={{ maxWidth: { sm: "100%", md: "50%" }, width: { sm: "100%", md: "50%" } }}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{ height: { xs: 300, md: 400 }, objectFit: "cover" }}
          />
        </Card>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            {item.name}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {item.description}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography>
              <strong>Category:</strong> {item.category}
            </Typography>
            <Typography>
              <strong>Owner:</strong> {item.owner}
            </Typography>
            <Typography>
              <strong>Condition:</strong> {item.condition}
            </Typography>
            <Typography>
              <strong>Status:</strong>{" "}
              {item.sold ? (
                <Chip label="Sold" color="error" size="small" />
              ) : item.available ? (
                <Chip label="Available" color="success" size="small" />
              ) : (
                <Chip
                  label={`Borrowed by ${item.borrowedBy ?? "someone"}`}
                  color="warning"
                  size="small"
                />
              )}
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            {existingRequest ? (
              <Typography variant="body2" color="primary">
                A borrow request has already been made. Current status:{" "}
                <strong>{existingRequest.status}</strong>.
              </Typography>
            ) : item.available && !item.sold ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  dispatch(
                    createRequest({
                      itemId: item.id,
                      itemName: item.name,
                      owner: item.owner,
                    })
                  )
                }
              >
                Request to Borrow
              </Button>
            ) : (
              <Typography variant="body2" color="text.secondary">
                This item is currently {item.sold ? "sold" : "unavailable"}.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default ItemDetailPage;

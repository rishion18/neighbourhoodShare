// pages/my-requests.tsx
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PageContainer from "../../layouts/pageContainer";
import Breadcrumb from "../../common/breadCrumbs";
import { cancelRequest, type BorrowRequest } from "../../../redux/slices/requests.slice";


const MyRequests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state: any) => state.requests);

  const breadcrumbItems = [
    { title: "Home", url: "/" },
    { title: "My Requests" },
  ];

  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />

      <Box sx={{ p: "16px" }}>
        <Typography variant="h4" gutterBottom>
          My Borrow Requests
        </Typography>

        {requests.length === 0 ? (
          <Typography>No borrow requests found.</Typography>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {requests.map((request:BorrowRequest) => (
              <Card key={request.id}>
                <CardContent>
                  <Typography variant="h6">{request.itemName}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Owner: {request.owner}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Requested At: {new Date(request.createdAt).toLocaleString()}
                  </Typography>
                  <Chip
                    label={request.status}
                    color={
                      request.status === "pending"
                        ? "warning"
                        : request.status === "approved"
                        ? "success"
                        : request.status === "returned"
                        ? "info"
                        : "default"
                    }
                    sx={{ mt: 1 }}
                  />
                </CardContent>

                {request.status === "pending" && (
                  <CardActions>
                    <Button
                      color="error"
                      onClick={() => dispatch(cancelRequest(request.id))}
                    >
                      Cancel Request
                    </Button>
                  </CardActions>
                )}
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default MyRequests;

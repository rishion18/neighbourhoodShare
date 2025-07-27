import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useItems } from "../../../hooks/useItems";
import type { BorrowRequest } from "../../../redux/slices/requests.slice";
import { updateUserProfile } from "../../../redux/slices/user.slice";
import PageContainer from "../../layouts/pageContainer";
import Breadcrumb from "../../common/breadCrumbs";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const requests = useSelector((state: any) => state.requests);
  const {items} = useItems();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const borrowedItems = requests
    .filter((r:BorrowRequest) => r.status !== "cancelled")
    .map((r:BorrowRequest) => r.itemName);

  const lentItems = items
    .filter((itm) => itm.owner === user.name)
    .map((itm) => itm.name);

  const breadcrumbItems = [
    { title: "Home", url: "/" },
    { title: "Profile" },
  ];

  console.log('borrowedItems:', borrowedItems);

  const handleSave = () => {
    dispatch(updateUserProfile({ name, email }));
    setEditMode(false);
  };

  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />
      <Box sx={{ p: "16px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant="h4">User Profile</Typography>

        <Card>
          <CardContent>
            <Typography variant="h6">Profile Details</Typography>
            <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
              {editMode ? (
                <>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button variant="contained" onClick={handleSave}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Typography><strong>Name:</strong> {user.name}</Typography>
                  <Typography><strong>Email:</strong> {user.email}</Typography>
                  <Typography><strong>Trust Score:</strong> {user.trustScore}/10</Typography>
                  <Typography><strong>Positive Feedback:</strong> {user.positiveFeedback}%</Typography>
                  <Typography><strong>Lending Count:</strong> {user.lendingCount}</Typography>
                  <Typography><strong>Borrowing Count:</strong> {user.borrowingCount}</Typography>
                  <Button variant="outlined" onClick={() => setEditMode(true)}>
                    Edit Profile
                  </Button>
                </>
              )}
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Items Lent</Typography>
            <Box sx={{ mt: 1 }}>
              {lentItems.length > 0 ? (
                lentItems.map((item, idx) => (
                  <Typography key={idx}>• {item}</Typography>
                ))
              ) : (
                <Typography color="text.secondary">No items lent.</Typography>
              )}
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Items Borrowed</Typography>
            <Box sx={{ mt: 1 }}>
              {borrowedItems.length > 0 ? (
                borrowedItems.map((item:string, idx:number) => (
                  <Typography key={idx}>• {item}</Typography>
                ))
              ) : (
                <Typography color="text.secondary">No items borrowed.</Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;

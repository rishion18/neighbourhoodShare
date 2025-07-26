import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import PageContainer from "../../layouts/pageContainer";
import Breadcrumb from "../../common/breadCrumbs";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { addItem } from "../../../redux/slices/item.slice";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";

const categories = ["Tools", "Electronics", "Books", "Furniture"];
const conditions = ["New", "Good", "Fair", "Poor"];

interface FormData {
  name: string;
  description: string;
  category: string;
  owner: string;
  condition: string;
  available: boolean | string;
}

export default function AddItemPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [preview, setPreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const defaultImage =
    "https://images-cdn.ubuy.co.in/64697aa3d5edf93b1a509dac-ever-advanced-instant-blackout-camping.jpg";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const removeImage = () => {
    setPreview(null);
  };

  const onSubmit = (data: FormData) => {
    const payload = {
      ...data,
      available: data.available === "true",
      image: defaultImage,
    };

    console.log("Submitted item:", payload);
    dispatch(addItem(payload as any));
    reset();
    setPreview(null);
    navigate("/");
  };

  return (
    <PageContainer>
      <Box p={2}>
        <Breadcrumb
          items={[{ title: "Home", url: "/" }, { title: "Add Item" }]}
        />

        <Typography variant="h4" mb={3}>
          Add New Item
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "grid", gap: 3, maxWidth: 600 }}
        >
          <TextField
            label="Name"
            fullWidth
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            select
            label="Category"
            fullWidth
            defaultValue=""
            {...register("category", { required: "Select a category" })}
            error={!!errors.category}
            helperText={errors.category?.message}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Owner"
            fullWidth
            {...register("owner", { required: "Owner is required" })}
            error={!!errors.owner}
            helperText={errors.owner?.message}
          />

          <TextField
            select
            label="Condition"
            fullWidth
            defaultValue=""
            {...register("condition", { required: "Condition is required" })}
            error={!!errors.condition}
            helperText={errors.condition?.message}
          >
            {conditions.map((condition) => (
              <MenuItem key={condition} value={condition}>
                {condition}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Availability"
            fullWidth
            defaultValue="true"
            {...register("available", { required: "Availability is required" })}
            error={!!errors.available}
            helperText={errors.available?.message}
          >
            <MenuItem value="true">Available</MenuItem>
            <MenuItem value="false">Not Available</MenuItem>
          </TextField>

          <Box>
            {!preview ? (
              <>
                <Button variant="outlined" component="label">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                <Avatar
                  src={preview}
                  alt="Preview"
                  variant="rounded"
                  sx={{ width: 80, height: 80 }}
                />
                <IconButton onClick={removeImage}>
                  <Close />
                </IconButton>
              </Box>
            )}
          </Box>

          <Button variant="contained" type="submit">
            Add Item
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
}

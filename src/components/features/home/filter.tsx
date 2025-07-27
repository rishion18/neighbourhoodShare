import { useMemo } from "react";
import MultiSelectDropdown from "../../ui/mutiSelectDropdown";
import {
  TextField,
  Drawer,
  Button,
  Box,
  Divider,
} from "@mui/material";

interface FilterProps {
  categories: string[];
  conditions: string[];
  availability: string[];
  selectedCategories: string[];
  selectedConditions: string[];
  selectedAvailability: string[];
  searchQuery: string;
  setMobileOpen: (open: boolean) => void;
  mobileOpen: boolean;
  onSearchChange: (query: string) => void;
  onChange: (
    type: "category" | "condition" | "availability",
    selected: string[]
  ) => void;
}

const drawerWidth = 300;

const Filter = ({
  categories,
  conditions,
  availability,
  selectedCategories,
  selectedConditions,
  selectedAvailability,
  searchQuery,
  onSearchChange,
  onChange,
  setMobileOpen,
  mobileOpen,
}: FilterProps) => {
  const categoryOptions = useMemo(() => [...categories], [categories]);

  const handleSelect =
    (type: "category" | "condition" | "availability") => (values: string[]) => {
      if (type === "category" && values.includes("All")) {
        onChange("category", []);
      } else {
        onChange(type, values);
      }
    };

  const filterContent = (
    <Box sx={{ padding: 2 }}>
      <h3
        style={{
          marginBottom: "1rem",
          textTransform: "capitalize",
          fontSize: "x-small",
        }}
      >
        SEARCH
      </h3>
      <TextField
        variant="outlined"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search items nearby ..."
        size="small"
        sx={{ width: "230px", marginBottom: "1.5rem" }}
      />

      <h3
        style={{
          marginBottom: "1rem",
          textTransform: "capitalize",
          fontSize: "x-small",
        }}
      >
        FILTERS
      </h3>
      <MultiSelectDropdown
        title="Categories"
        options={categoryOptions}
        selectedOptions={selectedCategories}
        onChange={handleSelect("category")}
      />
      <MultiSelectDropdown
        title="Condition"
        options={conditions}
        selectedOptions={selectedConditions}
        onChange={handleSelect("condition")}
      />
      <MultiSelectDropdown
        title="Availability"
        options={availability}
        selectedOptions={selectedAvailability}
        onChange={handleSelect("availability")}
      />
    </Box>
  );

  return (
    <>
      {/* Desktop filter */}
        <Box component={'aside'} sx={{ display: { xs: "none", sm: "block" } }}>{filterContent}</Box>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#fff",
          },
        }}
      >
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <strong>Filters</strong>
            <Button onClick={() => setMobileOpen(false)} size="small">
              Close
            </Button>
          </Box>
          <Divider sx={{ mb: 2 }} />
          {filterContent}
        </Box>
      </Drawer>
    </>
  );
};

export default Filter;

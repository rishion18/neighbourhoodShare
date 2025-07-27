import React, { useState } from "react";
import type { Item } from "../../ui/productCard";
import ProductCard from "../../ui/productCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
import { FilterList } from "@mui/icons-material";

const ITEMS_PER_PAGE = 9;

const ProductSection: React.FC<{ filteredItems: Item[], setMobileOpen: (open: boolean) => void, mobileOpen: boolean }> = ({
  filteredItems,
  setMobileOpen,
  mobileOpen,
}) => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Box sx={{ display: { xs: "block", sm: "none" }, mb: 2 }}>
        {!mobileOpen && <Button  
          startIcon={<FilterList />}
          variant="outlined"
          onClick={() => setMobileOpen(true)}
          fullWidth
        >
          Filters
        </Button>}
      </Box>
      <Box
        style={{
          flex: 1,
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          minWidth: 0,
        }}
      >
        {paginatedItems.map((item: Item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Box>

      <Stack spacing={2} alignItems="center" marginTop={4}>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>
    </section>
  );
};

export default ProductSection;

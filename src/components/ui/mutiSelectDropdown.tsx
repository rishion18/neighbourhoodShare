import { useState } from "react";
import {
  Box,
  Collapse,
  Checkbox,
  FormControlLabel,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MultiSelectDropdown = ({
  title = "Filter",
  options,
  selectedOptions,
  onChange,
}: {
  title?: string;
  options: string[];
  selectedOptions: string[];
  onChange: (updated: string[]) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (option: string) => {
    const updated = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];
    onChange(updated);
  };

  return (
    <Box>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          width: "230px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          px: 1,
          py: 0.5,
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'IBM Plex Sans', serif",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "21px",
          }}
        >
          {selectedOptions.length > 0 ? `${selectedOptions.length} selected` : title}
        </Typography>
        <IconButton size="small">
          {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
        </IconButton>
      </Box>

      <Collapse in={open} timeout="auto">
        <Box sx={{ px: 1, '& label': { display: 'flex' } }}>
          {options.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  size="small"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleToggle(option)}
                />
              }
              label={
                <Typography
                  sx={{
                    fontFamily: "'IBM Plex Sans', serif",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "21px",
                  }}
                >
                  {option}
                </Typography>
              }
              sx={{ display: "block", mx: 0 }}
            />
          ))}
        </Box>
      </Collapse>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
};

export default MultiSelectDropdown;

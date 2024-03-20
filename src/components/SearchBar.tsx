import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Box, Input } from "@mui/material";

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchBarWidth?: string;
}

const SearchBar = ({ placeholder, onChange, searchBarWidth }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchOutlined sx={{ marginRight: "10px" }} />
        <Input
          placeholder={placeholder}
          onChange={onChange}
          sx={{
            width: searchBarWidth,
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "1.1rem",
          }}
          disableUnderline
        />
      </Box>
    </>
  );
};

export default SearchBar;

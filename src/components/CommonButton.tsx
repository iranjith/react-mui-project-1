import Button from "@mui/material/Button";
import React from "react";

interface Props {
  children: React.ReactNode;
  color:"primary" | "secondary" | "error" | "info" | "success" | "warning";
  variant: "contained" | "outlined" | "text";
  disabled: boolean;
  size: "small" | "medium" | "large";
  sx?: any;
  onClick?: () => void;
}

const CommonButton = ({ children, color, variant, size, disabled, sx, onClick }: Props) => {
  return (
    <>
      <Button variant={variant} color={color} size={size} disabled={disabled} sx={sx} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default CommonButton;

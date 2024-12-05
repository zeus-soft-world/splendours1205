import * as React from "react";
import TextField from "@mui/material/TextField";

export default function CustomTextField() {
  return (
    <TextField
      id="standard-basic"
      label="EMAIL"
      variant="standard"
      className="flex w-full"
      sx={{
        input: {
          color: "white",
          fontSize: "23px",
          fontWeight: 400,
          fontFamily: "var(--font-montserrat)",
        },
        fontSize: {
          lg: "23px",
        },
        "& .MuiInputLabel-root": {
          color: "#FFFFFF", // Default color
          fontSize: "20px", // Custom font size
          fontWeight: 400, // Optional: Adjust weight
          fontFamily: "var(--font-montserrat)", // Optional: Custom font
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#FFFFFF", // Change label color when focused
          fontWeight: 500, // Optional: Bold when focused
        },
        "& .MuiInput-underline:before": { borderBottomColor: "#DCC5BD" }, // Default
        "& .MuiInput-underline:hover:before": { borderBottomColor: "#DCC5BD" }, // Hover
        "& .MuiInput-underline:after": { borderBottomColor: "#DCC5BD" }, // Focused
      }}
    />
  );
}

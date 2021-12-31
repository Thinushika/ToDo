import {
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RadioButtonUnchecked } from "@mui/icons-material";

function AddTaskForm() {
  return (
    <>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: 200,
            p: 3,
          }}
        >
          <RadioButtonUnchecked
            sx={{
              color: "#fff",
              mx: 1,
              my: 0.5,
            }}
          />
          <TextField 
          id="input-with-sx" 
          label="With sx" 
          sx={{
              color:"#fff",
          }}
          variant="standard"
           />
        </Box>
    </>
  );
}

export default AddTaskForm;

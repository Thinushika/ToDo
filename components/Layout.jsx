import { Box, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        }
    }
})

function Layout() {
  return (
    <div>
      <Box
        component="span"
        sx={{
          p: 2,
          border: "1px dashed grey",
          borderRadius: 10,
          padding: 10,
          bgcolor: 'grey.700',
          position: 'absolute'
        }}
      >
        <Button>Save</Button>
      </Box>
    </div>
  );
}

export default Layout;

import React from 'react'
// import { makeStyles } from "@mui/styles";
// import cover from "../public/images/cover.jpg";
import { Menu } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import "@fontsource/roboto/500.css";

// const useStyles = makeStyles((theme) => ({
//   header: {
//     backgroundImage: `src(${cover})`,
//   }
// }));

function AppBarDesign() {

    // const classes = useStyles();

    return (
        <>
            <AppBar
        // className={classes.header}
        sx={{
          height: 200,
          background: "linear-gradient(to right bottom, #483185 20%, #f50057)",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          {/* <IconButton>
            <Menu sx={{ color: "white" }} />
          </IconButton> */}
          <Avatar
            sx={{
              bgcolor: "#9fe9e9e",
              p: 6,
            }}
          >
            TJ
          </Avatar>
        </Toolbar>
        <Typography
        variant="h3"
          sx={{
            textAlign: 'center',
          }}
        >
          To-Do List
        </Typography>
      </AppBar>
        </>
    )
}

export default AppBarDesign

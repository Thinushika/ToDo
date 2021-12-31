import { createTheme ,ThemeProvider } from '@mui/material/styles';
import Layout from "../components/Layout";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#483185",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#040404",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
}

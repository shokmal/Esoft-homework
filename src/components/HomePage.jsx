import { Box, Typography, Button, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function HomePage() {
  return (
    <>
      <Container align="center">
        <Box
          maxWidth="415px"
          width="100%"
          borderRadius="20px"
          paddingLeft="30px"
          paddingRight="30px"
          paddingTop="38px"
          paddingBottom="38px"
          display="flex"
          flexDirection="column"
          height="100vh"
          justifyContent="center"
        >
          <Typography
            variant="h1"
            fontWeight="500"
            fontSize="30px"
            lineHeight="23px"
            marginBottom="38px"
            align="center"
          >
            Выбирите домашние задание
          </Typography>
          <Button variant="contained" style={{ marginTop: 20 }}>
            Домашка 1
          </Button>
          <Button variant="contained" style={{ marginTop: 20 }}>
            Домашка 2
          </Button>
          <Button variant="contained" style={{ marginTop: 20 }}>
            Домашка 3
          </Button>
        </Box>
      </Container>
    </>
  );
}

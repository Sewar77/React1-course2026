import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Container
        sx={{
          bgcolor: "Brown",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          color: "AliceBlue",
          p: 3,
          fontSize: "34px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">Facebook</Typography>
          <Typography variant="body2">Instagram</Typography>
          <Typography variant="body2">Twitter</Typography>
        </Box>
        <Typography>Pizza, Resturant all rights reserved!</Typography>
      </Container>
    </>
  );
}

export default Footer;

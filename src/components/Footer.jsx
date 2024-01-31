import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/logoWithoutText.png";

const Footer = () => {
  return (
    <Box>
      <AppBar sx={{ position: "relative", bottom: 0, paddingY: "1rem" }}>
        <Toolbar>
          <Box
            sx={{
                width: "100dvw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
          >
            <img className="footer-logo " src={Logo} alt='Logo' />
            <Box mt={3}>
              <Typography>Calle 1234, CABA.</Typography>
              <Typography>Argentina C0000XYZ</Typography>
            </Box>
            <Box mt={3}>
              <Typography>Tel./Fax: [+54] 11 0000-0000</Typography>
              <Typography>email@email.com</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography
        sx={{ backgroundColor: "#2f51e9", color: "#ffff" }}
        variant='subtitle2'
        textAlign={"center"}
      >
        Copyright © 2024 Construcciones XYZ. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

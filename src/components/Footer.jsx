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
              color: "text.main",
              alignItems: "center",
            }}
          >
            <img className='footer-logo ' src={Logo} alt='Logo' />
            <Box
              sx={{
                width:"100%",
                display: "flex",
                justifyContent:"space-evenly"
              }}
            >
              <Box>
                <Typography variant='body1'>
                  Calle 1234, CABA.
                </Typography>
                <Typography variant='body1'>Argentina C0000XYZ</Typography>
              </Box>
              <Box>
                <Typography variant='body1'>
                  Tel./Fax: [+54] 11 0000-0000
                </Typography>
                <Typography variant='body1'>email@email.com</Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography
        sx={{ backgroundColor: "secondary.main", color: "text.main" }}
        variant='subtitle2'
        textAlign={"center"}
      >
        Copyright © 2024 Construcciones XYZ. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

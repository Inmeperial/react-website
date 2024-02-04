import { Box, Typography, useMediaQuery } from "@mui/material";

const Contact = () => {
  const isPortatil = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      sx={
        isPortatil
          ? { minHeight: "67dvh", mt: "120px", textAlign: "center" }
          : {
              minHeight: "67dvh",
              mt: "150px",
              textAlign: "center",
              mx: "300px",
            }
      }
    >
      <Box>
        <Typography variant='h4' color='title.main'>
          Contáctanos
        </Typography>
        <Typography sx={{ mx: "60px", my: "30px", color:"text.secondary" }}>
          Lorem ipsum dolor sit amet, admodum scribentur vel cu, ei autem
          blandit mel. Sed debet perfecto cu, eu mei malis minim liber. Populo
          graeco an per. Tritani volumus phaedrum in vel, et veri labore
          eloquentiam eam. Tempor tritani no sit, te duo populo electram, vix
          dico utinam ne. Et dicam scaevola duo, et conceptam definiebas
          mediocritatem pri.
        </Typography>
      </Box>
      <Box
        sx={
          isPortatil
            ? {
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }
            : {
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }
        }
      >
        <Box sx={{ my: "10px" }}>
          <Typography variant='h6' color="complement.main">Tel./Fax: </Typography>
          <Typography variant='h6' color="text.secondary">[+54] 11 0000-0000</Typography>
        </Box>
        <Box sx={{ my: "10px" }}>
          <Typography variant='h6' color="complement.main">Mail:</Typography>
          <Typography variant='h6' color="text.secondary">email@email.com</Typography>
        </Box>
        <Box sx={{ my: "10px" }}>
          <Typography variant='h6' color="complement.main">Dirección:</Typography>
          <Typography variant='h6' color="text.secondary">Calle 1234, CABA.</Typography>
        </Box>
        <Box sx={{ my: "10px" }}>
          <Typography variant='h6' color="complement.main">Cod. Postal:</Typography>
          <Typography variant='h6' color="text.secondary">Argentina C0000XYZ</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

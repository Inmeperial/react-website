import { Box, Divider, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import Gif from "../assets/proceso.gif";
import { FlexColumnBox, FlexLogoText } from "../styles/CustomMUI";

const Welcome = () => {
  return (
    <Box sx={{ ...FlexColumnBox, my: "120px" }}>
      <Box
        sx={{
          ...FlexLogoText,
        }}
      >
        <img className='welcome-logo' src={Logo} alt='Logo' />
        <Box sx={{ width: "300px" }}>
          <Typography variant='h5' color="#1976D1">Bienvenidos a Construcciones XYZ</Typography>
          <Divider />
          <Typography my={1} variant='h6' color='#eb6f35'>
            Lorem ipsum dolor sit amet, ut ius appareat concludaturque.
          </Typography>
          <Typography my={2} variant='body1'>
            Id pri mandamus salutandi, viris causae no eos. Inani dolores
            splendide mea id, per tantas salutandi gubergren id.
          </Typography>
        </Box>
      </Box>
      <img className='gif' src={Gif} alt='Proceso de construcción' />
    </Box>
  );
};

export default Welcome;

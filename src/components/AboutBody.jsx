import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Perfil from "../assets/perfil.png";
import Logo from "../assets/logo.png";
import { FlexLogoText } from "../styles/CustomMUI";

const Perfiles = [Perfil, Perfil, Perfil, Perfil, Perfil];

const AboutBody = () => {
  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Box>
      <Box>
        <Box
          sx={{
            ...FlexLogoText,
          }}
        >
          <img className='welcome-logo' src={Logo} alt='logo'></img>
          <Box maxWidth='300px' my='50px'>
            <Typography my={1} variant='h5' color="title.main">
              ¿Quienes somos?
            </Typography>
            <Typography my={2} variant='body2' color="text.secondary">
              Et rebum paulo partem eum, eu has soleat virtute ancillae. Sumo
              delenit eos id, qui minim quaeque neglegentur et. No dicta
              lucilius consetetur mel, ex mei essent facilis, phaedrum antiopam
              gloriatur est ad. At graece docendi ius. Quo ne esse ullum semper,
              ignota facilisi senserit cu pro. Quis maluisset ei nam, eam ei
              viderer labitur pericula. Eum essent denique necessitatibus ne.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            my: "30px",
            mx: "150px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {Perfiles.map((perfil, index) => {
            return (
              <Box key={index}>
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "20px",
                  }}
                  src={perfil}
                  alt={index}
                />
                <Box sx={{ mx: "20px", textAlign:"center" }}>
                  <Typography color='secondary.main'>Puesto</Typography>
                  <Typography my={1} color='title.main'>
                    Nombre Apellido
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={
            isMobile
              ? {
                  display: "flex",
                  flexDirection: "column",
                  mx: "100px",
                  my: "60px",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  mx: "350px",
                  my: "60px",
                }
          }
        >
          <Box>
            <Typography
              variant='h5'
              sx={{ my: "20px", color: "complement.main" }}
            >
              Mision
            </Typography>
            <Typography variant='body1' sx={{ color: "title.main" }}>
              Lorem ipsum dolor sit amet, vide tincidunt mel id, te his elit
              fuisset euripidis, offendit oportere voluptatibus in sit. Ut sit
              errem saepe, ei partem everti efficiendi eos, ius ad melius
              fabellas corrumpit. Mei error utinam efficiantur te, omnesque
              euripidis vix ne. Apeirian aliquando te vis, fugit denique
              salutatus et sed, ei vim legendos evertitur.
            </Typography>
          </Box>
          <Divider sx={{ my: "20px" }} />
          <Box>
            <Typography
              variant='h5'
              sx={{ mb: "20px", color: "complement.main" }}
            >
              Vision
            </Typography>
            <Typography variant='body1' sx={{ color: "title.main" }}>
              Lorem ipsum dolor sit amet, vide tincidunt mel id, te his elit
              fuisset euripidis, offendit oportere voluptatibus in sit. Ut sit
              errem saepe, ei partem everti efficiendi eos, ius ad melius
              fabellas corrumpit. Mei error utinam efficiantur te, omnesque
              euripidis vix ne. Apeirian aliquando te vis, fugit denique
              salutatus et sed, ei vim legendos evertitur.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutBody;

import { Box, Typography } from "@mui/material";
import Perfil from "../assets/perfil.png";

const Perfiles = [Perfil, Perfil, Perfil, Perfil, Perfil];

const AboutBody = () => {
  return (
    <Box>
      <Box>
        <Typography variant='h5'>¿Quienes somos?</Typography>
        <Box>
          {Perfiles.map((perfil, index) => {
            return (
              <img
                style={{
                  backgroundColor: "#000",
                  width: "150px",
                  height: "150px",
                  margin:"20px"
                }}
                src={perfil}
                alt={perfil + index}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutBody;

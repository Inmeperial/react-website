import { Box, Typography, useMediaQuery } from "@mui/material";
import { ProyectsData } from "../data/Projects";
import { useParams } from "react-router-dom";
import { MarginHeader } from "../styles/CustomMUI";
import ProjectImageSlider from "../components/ProjectImageSlider";

const ProjectDetails = () => {
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width:768px)");
  const isPc = useMediaQuery("(min-width:1600px)");
  const project = ProyectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <Box height={390} my='150px'>
        <Typography textAlign='center' variant='h3'>
          Proyecto no encontrado
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ ...MarginHeader }}>
      <Box textAlign='center'>
        <Typography sx={{ my: "20px", color: "#1976D1" }} variant='h4'>
          {project.title}
        </Typography>
        <Typography sx={{ my: "20px", color: "#e4893e" }} variant='subtitle1'>
          Categoria: {project.area}
        </Typography>
      </Box>
      <Box>
        <img
          style={{ width: "100%" }}
          src={project.images[0]}
          alt={project.title}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          my: "40px",
        }}
      >
        <Typography my='30px' variant='body1'>
          <strong style={{ color: "#e4893e" }}>Año:</strong>
        </Typography>
        <Typography my='30px' variant='body1'>
          {project.year}
        </Typography>

        <Typography variant='body1'>
          <strong style={{ color: "#e4893e" }}>Descripción:</strong>
        </Typography>
        <Typography
          sx={
            isPc ? { mx: "300px" } : isMobile ? { mx: "20px" } : { mx: "220px" }
          }
          variant='body1'
        >
          {project.description}
        </Typography>
      </Box>
      <Box>
        <ProjectImageSlider images={project.images} />
      </Box>
    </Box>
  );
};

export default ProjectDetails;

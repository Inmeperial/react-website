import { Box, Typography, useMediaQuery } from "@mui/material";
import { ProyectsData } from "../data/Projects";
import { useParams } from "react-router-dom";
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
    <Box sx={{ my: "100px", paddingY: "2rem" }}>
      <Box textAlign='center'>
        <Typography sx={{ my: "20px", color: "title.main" }} variant='h4'>
          {project.title}
        </Typography>
        <Typography
          sx={{ my: "20px", color: "secondary.main" }}
          variant='subtitle1'
        >
          Categoria: {project.area}
        </Typography>
      </Box>
      <img
        style={{ width: "100%" }}
        src={project.images[0]}
        alt={project.title}
      />
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          my: "40px",
        }}
      >
        <Typography my='20px' variant='body1' color='secondary.main'>
          <strong>Año:</strong>
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {project.year}
        </Typography>

        <Typography my='20px' variant='body1' color='secondary.main'>
          <strong>Descripción:</strong>
        </Typography>
        <Typography
          sx={
            isPc
              ? { mx: "300px", color: "text.secondary" }
              : isMobile
              ? { mx: "20px", color: "text.secondary" }
              : { mx: "220px", color: "text.secondary" }
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

import { BoxProjectsAreas, ShadowTextBlack } from "../styles/CustomMUI";
import { Link } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

const ProjectsComponent = (props) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { id, title, area, image } = props;

  return (
    <Box sx={{ mx: "20px", my: "20px" }}>
      <Button
        component={Link}
        to={"/Proyectos/" + id}
        sx={{ borderRadius: "1rem" }}
      >
        <Box
          sx={
            isMobile
              ? {
                  ...BoxProjectsAreas,
                  width: "300px",
                  height: "350px",
                  backgroundImage: `url(${image})`,
                }
              : {
                  ...BoxProjectsAreas,
                  backgroundImage: `url(${image})`,
                }
          }
        >
          <Typography variant='h6' sx={{ ...ShadowTextBlack, color: "text.main" }}>
            {title}
          </Typography>
          <Typography variant='body1' sx={{ ...ShadowTextBlack, color: "text.main" }}>
            Categoria: {area}
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default ProjectsComponent;

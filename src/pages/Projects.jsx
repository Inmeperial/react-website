import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ProyectsData } from "../data/Projects";
import ProjectsComponent from "../components/ProjectsComponent";
import { useState } from "react";

const Areas = ["Todas", "Casas", "Edificios", "Baños", "Arquitectura"];

const Projects = () => {
  const [area, setArea] = useState("Todas");
  const [filteredProjects, setFilteredProjects] = useState(ProyectsData);

  const handleChange = (event) => {
    const selectedArea = event.target.value;
    setArea(selectedArea);

    if (selectedArea === "Todas") {
      setFilteredProjects(ProyectsData);
    } else {
      const filtered = ProyectsData.filter(
        (project) => project.area === selectedArea
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <Box sx={{ mt: "100px", paddingY: "2rem" }}>
      <Box sx={{ textAlign: "center", mr: "20px" }}>
        <Typography
          variant='h4'
          sx={{ textDecoration: "underline", my: "10px" }}
        >
          Obras
        </Typography>
        <Typography variant='body1'>
          Una variedad de proyectos y desarrollos de diversas características en
          toda Argentina.
        </Typography>
        <Box>
          <FormControl sx={{ m: 2 }}>
            <InputLabel id='Category'>Categorias</InputLabel>
            <Select
              sx={{ textAlign: "left", width: "120px", height: "40px" }}
              labelId='Category'
              id='Category'
              value={area}
              label='Categorias'
              onChange={handleChange}
            >
              {Areas.map((a, index) => {
                return (
                  <MenuItem key={index} value={a}>
                    <Typography variant="body2">{a}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: "50px",
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectsComponent
            key={project.id}
            id={project.id}
            title={project.title}
            area={project.area}
            image={project.images[0]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;

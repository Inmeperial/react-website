import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { MarginHeader } from "../styles/CustomMUI";

const Areas = ["Todas", "Casas", "Edificios", "Baños", "Arquitectura"];

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialArea = searchParams.get("categoria") || "Todas";
  const [area, setArea] = useState(initialArea);
  const [filteredProjects, setFilteredProjects] = useState(ProyectsData);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("categoria", area);
    navigate(`?${queryParams.toString()}`);
  }, [area, navigate]);

  useEffect(() => {
    if (area === "Todas") {
      setFilteredProjects(ProyectsData);
    } else {
      const filtered = ProyectsData.filter((project) => project.area === area);
      setFilteredProjects(filtered);
    }
  }, [area]);

  const handleChange = (event) => {
    const selectedArea = event.target.value;
    setArea(selectedArea);
  };

  return (
    <Box sx={{ ...MarginHeader }}>
      <Box sx={{ textAlign: "center", mr: "20px" }}>
        <Typography
          variant='h4'
          sx={{ textDecoration: "underline", my: "10px", color: "title.main" }}
        >
          Obras
        </Typography>
        <Typography variant='body1' color='secondary.main'>
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
                    <Typography variant='body2'>{a}</Typography>
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

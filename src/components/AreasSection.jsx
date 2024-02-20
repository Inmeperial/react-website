import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import House from "@mui/icons-material/House";
import Apartment from "@mui/icons-material/Apartment";
import Bathdroom from "@mui/icons-material/Bathtub";
import Architecture from "@mui/icons-material/Architecture";
import {
  ListItemArea,
  ListArea,
  FlexColumnBox,
  IconArea,
} from "../styles/CustomMUI";
import { useNavigate } from "react-router-dom";

const areasList = [
  { componente: <House sx={{ ...IconArea }} />, item: "Casas" },
  { componente: <Apartment sx={{ ...IconArea }} />, item: "Edificios" },
  { componente: <Bathdroom sx={{ ...IconArea }} />, item: "Baños" },
  { componente: <Architecture sx={{ ...IconArea }} />, item: "Arquitectura" },
];

const AreasSection = () => {
  const navigate = useNavigate();

  const handleListItemClick = (category) => {
    navigate(`/proyectos?categoria=${category}`);
  };

  return (
    <Box sx={{ ...FlexColumnBox, mb: "50px" }}>
      <Typography variant='h5' sx={{ mb: "20px", color: "title.main" }}>
        Áreas de enfoque:
      </Typography>

      <Box>
        <List sx={{ ...ListArea }}>
          {areasList.map((area) => {
            return (
              <ListItem
                sx={{ ...ListItemArea }}
              >
                <ListItemButton onClick={() => handleListItemClick(area.item)}>
                  <ListItemIcon>
                    {area.componente}
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText>{area.item}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default AreasSection;

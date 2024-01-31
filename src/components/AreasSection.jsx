import {
  Box,
  List,
  ListItem,
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

const AreasSection = () => {
  return (
    <Box sx={{ ...FlexColumnBox, mb:"50px" }}>
      <Typography variant='h5' sx={{mb: "20px"}}>Áreas de enfoque:</Typography>

      <Box>
        <List sx={{ ...ListArea }}>
          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <House sx={{ ...IconArea }} />
            </ListItemIcon>
            <ListItemText>Casas</ListItemText>
          </ListItem>

          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <Apartment sx={{ ...IconArea }} />
            </ListItemIcon>
            <ListItemText>Edificios</ListItemText>
          </ListItem>

          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <Bathdroom sx={{ ...IconArea }} />
            </ListItemIcon>
            <ListItemText>Baños</ListItemText>
          </ListItem>

          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <Architecture sx={{ ...IconArea }} />
            </ListItemIcon>
            <ListItemText>Arquitectura</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AreasSection;

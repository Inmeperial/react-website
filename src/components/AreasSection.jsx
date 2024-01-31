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
import { ListItemArea, ListArea } from "../styles/CustomMUI";

const AreasSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant='h5'>Áreas de enfoque:</Typography>

      <Box>
        <List sx={{ ...ListArea }}>
          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <House sx={{ fontSize: "70px" }} />
            </ListItemIcon>
            <ListItemText>Casas</ListItemText>
          </ListItem>

          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <Apartment sx={{ fontSize: "70px" }} />
            </ListItemIcon>
            <ListItemText>Departamentos</ListItemText>
          </ListItem>

          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <Bathdroom sx={{ fontSize: "70px" }} />
            </ListItemIcon>
            <ListItemText>Baños</ListItemText>
          </ListItem>

          <ListItem sx={{ ...ListItemArea }}>
            <ListItemIcon>
              <Architecture sx={{ fontSize: "70px" }} />
            </ListItemIcon>
            <ListItemText>Arquitectura</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AreasSection;

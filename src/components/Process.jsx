import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FlexColumnBox, IconProcess, TitleProcess } from "../styles/CustomMUI";
import Worker from "@mui/icons-material/Engineering";
import Maintenance from "@mui/icons-material/Handyman";
import Management from "@mui/icons-material/Description";

const Process = () => {
  return (
    <Box sx={{ backgroundColor: "#5db5fd", paddingY: "2rem" }}>
      <Typography variant='h5' textAlign='center'>
        Te acompañamos en todo el proceso
      </Typography>
      <Box>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            my:"20px"
          }}
        >
          <ListItem
            sx={{ ...FlexColumnBox, width: "300px", textAlign: "center" }}
          >
            <ListItemIcon>
              <Management sx={{ ...IconProcess }} />
            </ListItemIcon>
            <ListItemText sx={{ ...TitleProcess }}>
              Gestión de Proyectos y Documentación:
            </ListItemText>
            <ListItemText>
              Prima commune at mei, quod atomorum duo cu, putent admodum habemus
              vix no. Cum et eirmod appetere. Etiam nusquam mea in, feugiat
              suscipit appellantur pro an. Ludus quodsi constituto ad sea. Ea
              erant sanctus usu, an eum agam melius.
            </ListItemText>
          </ListItem>

          <ListItem
            sx={{ ...FlexColumnBox, width: "300px", textAlign: "center" }}
          >
            <ListItemIcon>
              <Worker sx={{ ...IconProcess }} />
            </ListItemIcon>
            <ListItemText sx={{ ...TitleProcess }}>
              Desarrollo Completo de la Obra:
            </ListItemText>
            <ListItemText>
              Prima commune at mei, quod atomorum duo cu, putent admodum habemus
              vix no. Cum et eirmod appetere. Etiam nusquam mea in, feugiat
              suscipit appellantur pro an. Ludus quodsi constituto ad sea. Ea
              erant sanctus usu, an eum agam melius.
            </ListItemText>
          </ListItem>

          <ListItem
            sx={{ ...FlexColumnBox, width: "300px", textAlign: "center" }}
          >
            <ListItemIcon>
              <Maintenance sx={{ ...IconProcess }} />
            </ListItemIcon>
            <ListItemText sx={{ ...TitleProcess }}>
              Servicio de Mantenimiento Post-Entrega:
            </ListItemText>
            <ListItemText>
              Prima commune at mei, quod atomorum duo cu, putent admodum habemus
              vix no. Cum et eirmod appetere. Etiam nusquam mea in, feugiat
              suscipit appellantur pro an. Ludus quodsi constituto ad sea. Ea
              erant sanctus usu, an eum agam melius.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Process;

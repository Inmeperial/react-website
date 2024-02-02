import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FlexColumnBox, TitleProcess } from "../styles/CustomMUI";
import { ProcessData } from "../data/Projects";
import Worker from "@mui/icons-material/Engineering";
import Maintenance from "@mui/icons-material/Handyman";
import Management from "@mui/icons-material/Description";

const Process = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", paddingY: "2rem" }}>
      <Typography variant='h5' textAlign='center'>
        Te acompañamos en todo el proceso
      </Typography>
      <Box>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            my: "20px",
          }}
        >
          {ProcessData.map((process) => {
            return (
              <ListItem
                key={process.id}
                sx={{ ...FlexColumnBox, width: "300px", textAlign: "center" }}
              >
                <ListItemIcon>{process.icon}</ListItemIcon>
                <ListItemText sx={{ ...TitleProcess }}>
                  {process.title}
                </ListItemText>
                <ListItemText sx={{color:"text.secondary"}}>
                  {process.description}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Process;

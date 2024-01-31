import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";
import { ButtonMenu } from "../styles/CustomMUI";

const drawerWidth = 240;
const navItems = ["Home", "Proyectos", "Nosotros", "Contacto"];

const NavBar = ({ window }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      height='100%'
      sx={{
        backgroundColor: "#008cff",
        color: "#ffff",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ml: "10px",
          mt: "10px",
        }}
      >
        {navItems.map((item) => (
          <Button
          key={item}
            sx={{ ...ButtonMenu }}
            component={Link}
            to={item === "Home" ? "/" : "/"+item}
          >
            {item}
          </Button>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar sx={{ paddingY: "1rem" }} position='fixed'>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <img src={Logo} alt='Logo' />
          <Box sx={{ mr: "10px", display: { xs: "none", sm: "flex" }}}>
            {" "}
            <Typography variant='h6' mr={3}>
              <Link className="nav-link" to='/'>Home</Link>
            </Typography>
            <Typography variant='h6' mr={3}>
              <Link className="nav-link" to='/proyectos'>Proyectos</Link>
            </Typography>
            <Typography variant='h6' mr={3}>
              <Link className="nav-link" to='/Nosotros'>Nosotros</Link>
            </Typography>
            <Typography variant='h6'>
              <Link className="nav-link" to='/Contacto'>Contacto</Link>
            </Typography>
          </Box>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <nav>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            anchor='right'
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </AppBar>
    </Box>
  );
};

export default NavBar;

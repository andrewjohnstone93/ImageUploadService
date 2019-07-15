import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const Header = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
      
    return(
        <div>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
            <h1>Secure Image Upload</h1>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={mobileOpen}
        anchor="left"
      >
        <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
            <ListItem button>
                View Images
            </ListItem>
            
            <ListItem button>
                Upload Images
            </ListItem>
        </List>
      </Drawer>

        </div>
    )
}
export default Header;

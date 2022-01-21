import * as React from 'react';
import { styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  backgroundColor: theme.palette.common.neutral_white_medium,
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  width: `calc(100% - ${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer - 1,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const ApplicationBar = (props) => {
    const openHandler = () => props.openDrawer(true);
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={props.status} sx={{boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              marginRight: '36px',
              ...(!props.status && { display: 'none' }),
            }}
            onClick={openHandler}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Content Title (Temp)
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{marginRight: '1rem'}}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LogoutIcon/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              //aria-controls={mobileMenuId}
              aria-haspopup="true"
              //onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ApplicationBar;
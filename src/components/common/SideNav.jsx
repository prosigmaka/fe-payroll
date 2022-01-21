import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EmailIcon from '@mui/icons-material/Email';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  //   backgroundColor: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.main,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.primary.main,
  //   backgroundColor: theme.palette.common.neutral_white_medium,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(5)})`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)})`,
  },
});

const DrawerHeader = styled('div')(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'flex-start',

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),

  '& .MuiDrawer-paper div button': {
    position: 'relative',
    left: open ? '50%' : '0',
    transform: open ? 'translateX(-50%)' : 'translateX(0)',
    transition: '.3s all ease-in-out',
  },
}));

const SideBarNav = (props) => {
  const theme = useTheme();

  const handleDrawerClose = () => props.toggleDrawer();

  return (
    <Drawer variant="permanent" open={props.status}>
      <DrawerHeader open={props.status}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <GridViewIcon /> : <GridViewIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem button key={"Dashboard"}>
          <ListItemIcon><DashboardIcon></DashboardIcon> </ListItemIcon>
          <ListItemText primary={"Dashboard"}></ListItemText>
        </ListItem>
        <ListItem button key={"Salary Slip"}>
          <ListItemIcon><ReceiptIcon></ReceiptIcon> </ListItemIcon>
          <ListItemText primary={"Salary Slip"}></ListItemText>
        </ListItem>
        <ListItem button key={"Leave Request"}>
          <ListItemIcon><EmailIcon></EmailIcon> </ListItemIcon>
          <ListItemText primary={"Leave Request"}></ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideBarNav;

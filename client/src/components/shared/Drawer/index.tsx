import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SpeedIcon from '@mui/icons-material/Speed';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'src/utils/hooks/useRedux';
import { closeDrawer } from 'src/stores/drawer.slice';
import { Drawer, DrawerHeader } from './styles';

const drawerNavigation = [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
    tooltipTitle: 'Home',
  },
  {
    name: 'Calendar Optimization',
    path: '/calender_optimization',
    icon: <EventNoteIcon />,
    tooltipTitle: 'Calendar Optimization',
  },
  {
    name: 'Post-Event Analysis',
    path: '/post_event_analysis',
    icon: <SpeedIcon />,
    tooltipTitle: 'Post Event Analysis',
  },
];

export default function SideBar() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { value } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();

  return (
    <Drawer variant="permanent" open={value}>
      <DrawerHeader>
        <IconButton onClick={() => dispatch(closeDrawer())}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {[...drawerNavigation].map((nav, index) => (
        <List
          onClick={() => navigate(nav.path)}
          key={nav.name}
          sx={{
            backgroundColor:
              nav.path === location.pathname
                ? '#ebebeb'
                : theme.palette.secondary.contrastText,
            color:
              nav.path === location.pathname
                ? theme.palette.primary.main
                : '#7c7c7c',
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: value ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <Tooltip title={nav.tooltipTitle} placement="right-start">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: value ? 3 : 'auto',
                  justifyContent: 'center',
                  color:
                    nav.path === location.pathname
                      ? theme.palette.primary.main
                      : '#7c7c7c',
                }}
              >
                {nav.icon}
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary={nav.name} sx={{ opacity: value ? 1 : 0 }} />
          </ListItemButton>
        </List>
      ))}
    </Drawer>
  );
}

import { Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useAppDispatch, useAppSelector } from 'src/utils/hooks/useRedux';
import { toggleDrawer } from 'src/stores/drawer.slice';
import { AppBar } from './styles';

export default function NavBar() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.drawer);
  return (
    <Box /*sx={{ flexGrow: 1 }}*/>
      <AppBar position="fixed" open={value}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(toggleDrawer())}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Promo
          </Typography>
          <Button color="inherit">
            <AccountCircleIcon sx={{ mr: 1 }} />
            User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

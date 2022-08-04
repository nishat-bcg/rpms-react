import type { ReactNode } from 'react';
import { Box, Toolbar, useMediaQuery } from '@mui/material';
import { Drawer, Nav } from 'src/components/index';

interface LayoutProps {
  children?: ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <Nav />
      <Drawer />
      <Box
        component="main"
        sx={{
          /* flexGrow: 1, */ p: 3,
          width: '100%',
          height: '90vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;

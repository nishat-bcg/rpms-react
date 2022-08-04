import { Container, Grid, LinearProgress, Box } from '@mui/material';
import { Layout } from 'src/components/index';

export default function Loading() {
  return (
    <Layout>
      <Container maxWidth="sm" sx={{ height: '100%', display: 'flex' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
}

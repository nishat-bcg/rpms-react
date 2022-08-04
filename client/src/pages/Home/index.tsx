import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
} from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SpeedIcon from '@mui/icons-material/Speed';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'src/components/index';

function Home() {
  const navigate = useNavigate();
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
          <Grid item md={6}>
            <Card
              sx={{ maxWidth: '300px', cursor: 'pointer' }}
              onClick={() => navigate('/calender_optimization')}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CardActions sx={{ marginBottom: '15px' }}>
                  <EventNoteIcon
                    sx={{ fontSize: '50px' }}
                    color="primary"
                  ></EventNoteIcon>
                </CardActions>
                <Typography sx={{ marginBottom: '15px' }} variant="h6">
                  Calendar Optimization
                </Typography>
                <Typography variant="body2">
                  Create a new calendar from the future or update / re-optimize
                  your current plan.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card
              sx={{ maxWidth: '300px', cursor: 'pointer' }}
              onClick={() => navigate('/post_event_analysis')}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CardActions sx={{ marginBottom: '15px' }}>
                  <SpeedIcon
                    sx={{ fontSize: '50px' }}
                    color="primary"
                  ></SpeedIcon>
                </CardActions>
                <Typography sx={{ marginBottom: '15px' }} variant="h6">
                  Post-Event Analysis
                </Typography>
                <Typography variant="body2">
                  Review the performance of past promotions based on uplifts and
                  financial KPIs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;

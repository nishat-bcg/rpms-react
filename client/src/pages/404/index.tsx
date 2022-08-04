import { Container, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PAGE_NOT_FOUND from 'src/assets/404.jpg';

export default function Error() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack sx={{ marginTop: 5 }} spacing={2}>
        <img
          src={PAGE_NOT_FOUND}
          alt="page_not_found"
          height={500}
          width={1000}
        />
        <Button variant="contained" onClick={() => navigate('/')}>
          Go Back
        </Button>
      </Stack>
    </Container>
  );
}

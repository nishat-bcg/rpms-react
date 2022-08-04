import { Box, Typography, Container, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  Layout,
  CalOptimTable,
  Modal,
  CalendarForm,
} from 'src/components/index';

import { useAppDispatch } from 'src/utils/hooks/useRedux';

import { openModal } from 'src/stores/modal.slice';

function CalendarOptimization() {
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <Modal>
        <CalendarForm />
      </Modal>
      <Container sx={{ height: '100%' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography paragraph color="primary">
            All Calendar
          </Typography>
          <Button variant="contained" onClick={() => dispatch(openModal())}>
            <AddIcon sx={{ marginRight: 1 }} /> New Calendar
          </Button>
        </Stack>
        <Box>
          <CalOptimTable />
        </Box>
      </Container>
    </Layout>
  );
}

export default CalendarOptimization;

import { useMemo } from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  Tooltip,
  IconButton,
} from '@mui/material';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InfoIcon from '@mui/icons-material/Info';
import MenuItem from '@mui/material/MenuItem';

import useForm from 'src/utils/hooks/useForm';
import { useAppDispatch } from 'src/utils/hooks/useRedux';
import { addToCalendar } from 'src/stores/calendar.slice';
import { closeModal } from 'src/stores/modal.slice';
import { lastEdited } from 'src/utils/index';

type CalendarForm = {
  name: string;
  startDate: null | string;
  numberOfWeeks: string | number;
  marketShare: string;
  disruptionLevel: string;
  brandline: boolean;
};

const INITIAL_STATE = {
  name: '',
  startDate: '',
  numberOfWeeks: '',
  optimizationGoal: '',
  marketShare: '',
  disruptionLevel: '',
  brandline: false,
};

export default function NewCalendarForm() {
  const { state, handleChange } = useForm<CalendarForm>(INITIAL_STATE);
  const dispatch = useAppDispatch();

  const memolastEdited = useMemo(() => lastEdited(), []);

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems={'center'}>
        <Grid item md={6} xs={12} sm={12}>
          <Typography variant="body1">Name</Typography>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <TextField
            variant="standard"
            name="name"
            value={state.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <Typography>Date Start</Typography>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <TextField
            variant="standard"
            type={'date'}
            name="startDate"
            value={state.startDate}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <Typography>Number Of Weeks</Typography>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <TextField
            variant="standard"
            name="numberOfWeeks"
            value={state.numberOfWeeks}
            onChange={handleChange}
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item md={12} xs={12} sm={12} mt={2}>
          <Typography color="primary" variant="h6">
            CPG Goal
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <Typography variant="body1">Optimization Goal</Typography>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="optimization_Goal"
              name="optimizationGoal"
              onChange={handleChange}
            >
              <FormControlLabel
                value="sales"
                control={<Radio />}
                label="Sales"
              />
              <FormControlLabel
                value="profit"
                control={<Radio />}
                label="Profit"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={12} sm={12} xs={12} mt={2}>
          <Typography color="primary" variant="h6">
            Business Constraints
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography>CPG Market Share</Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            variant="standard"
            fullWidth
            name="marketShare"
            value={state.marketShare}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography>Disruption Level</Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <FormControl variant="standard" fullWidth>
            <Select
              name="disruptionLevel"
              value={state.disruptionLevel}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'10'}>10</MenuItem>
              <MenuItem value={'20'}>20</MenuItem>
              <MenuItem value={'30'}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography>Promo Constraint</Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Button variant="contained" fullWidth>
            <CloudUploadIcon sx={{ mr: 1 }} /> Upload
          </Button>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography>Locked Promo Slots</Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Button variant="contained" fullWidth>
            <CloudUploadIcon sx={{ mr: 1 }} /> Upload
          </Button>
        </Grid>
        <Grid item md={11} sm={12} xs={12}>
          <Typography>
            Each brandline is on promo at least once per period
          </Typography>
        </Grid>
        <Grid item md={1} sm={12} xs={12}>
          <Checkbox
            name="brandline"
            value={state.brandline}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Grid>
        <Grid item md={11} sm={12} xs={12}>
          <Typography>Info on other applied constraint</Typography>
        </Grid>
        <Grid item md={1} sm={12} xs={12} alignSelf="end">
          <Tooltip title="Info on other applied constraint">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item md={12} sm={12} xs={12} mt={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              dispatch(
                addToCalendar({
                  name: state.name,
                  last_edited: memolastEdited,
                  status: 'Processed',
                })
              );
              dispatch(closeModal());
            }}
          >
            Optimize
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

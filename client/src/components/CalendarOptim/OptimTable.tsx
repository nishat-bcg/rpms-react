import { useEffect, useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import { useAppSelector, useAppDispatch } from 'src/utils/hooks/useRedux';
import { fetchCalendarsData } from 'src/stores/calendar.slice';
import { SnackbarContext } from 'src/utils/providers/Snackbar';

export default function OptimTable() {
  const { entities, error } = useAppSelector((state) => state.calendar);
  const { setAlertSeverity, trackMessage, showSnackbar } =
    useContext(SnackbarContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCalendarsData());
  }, []);

  useEffect(() => {
    if (error) {
      showSnackbar();
      setAlertSeverity('error');
      trackMessage(error.message);
    }
  }, [error]);

  return (
    <TableContainer sx={{ marginTop: 3 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="All Calendars">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Last Edit</TableCell>
            <TableCell align="left">Export</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entities?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.last_edited}</TableCell>
              <TableCell align="left">
                <DownloadIcon />
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import { useEffect, useState, useContext, useMemo } from 'react';
import { Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { ApiLoader } from 'src/components/index';
import { useAppDispatch, useAppSelector } from 'src/utils/hooks/useRedux';
import { fetchCampaignMatrix } from 'src/stores/campaign.slice';
import { SnackbarContext } from 'src/utils/providers/Snackbar';

import { ColorIndicator } from 'src/utils/constant';

ChartJS.register(...registerables);

export default function EfficiencyMatrix() {
  const { entities, error, loading } = useAppSelector(
    (state) => state.campaign
  );
  const { setAlertSeverity, trackMessage, showSnackbar } =
    useContext(SnackbarContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCampaignMatrix());
  }, []);

  useEffect(() => {
    if (error) {
      showSnackbar();
      setAlertSeverity('error');
      trackMessage(error.message);
    }
  }, [error]);

  const dataSets = [
    {
      label: '# of Votes',
      data: [3000, 2700, 1225, 2700],
      borderWidth: 1,
      backgroundColor: ['#54775c'],
    },
    {
      label: '# of Votes',
      data: [3000, 1700, 900, 2250],
      borderWidth: 1,
      backgroundColor: ['#d7df3c'],
    },
    {
      label: '# of Votes',
      data: [2100, 2950, 1200, 2460],
      borderWidth: 1,
      backgroundColor: ['#7ca893'],
    },
    {
      label: '# of Votes',
      data: [2890, 3884, 2540, 1900],
      borderWidth: 1,
      backgroundColor: ['#c31653'],
    },
  ];

  const memoisedDataSets = useMemo(() => dataSets, []);

  return (
    <>
      {loading && <ApiLoader open={true} />}
      <Box>
        <TableContainer sx={{ marginTop: 3, marginBottom: 3 }}>
          <Table aria-label="Calendar Optimization table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Classification</TableCell>
                <TableCell align="left">Number of offers</TableCell>
                <TableCell align="left">Total Increment sales</TableCell>
                <TableCell align="left">Total Increment Margin (€)</TableCell>
                <TableCell align="left">Classification</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entities?.map((row) => (
                <TableRow
                  key={row.classification_name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <Stack direction={'row'} spacing={2} alignItems="center">
                      <div
                        style={{
                          height: '10px',
                          width: '10px',
                          background: ColorIndicator(row.classification_name),
                        }}
                      ></div>
                      <Typography variant="body2">
                        {row.classification_name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="left">{row.number_of_offers}</TableCell>
                  <TableCell align="left">
                    {row.total_incremental_sales}
                  </TableCell>
                  <TableCell align="left">
                    {row.total_incremental_margin}
                  </TableCell>
                  <TableCell align="left">{row.classification}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box maxWidth={700}>
        <Bar
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
              ticks: {
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={{
            labels: [2400, 2210, 2290, 2000],
            datasets: memoisedDataSets,
          }}
        />
      </Box>
    </>
  );
}

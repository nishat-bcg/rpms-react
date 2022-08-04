import * as React from 'react';
import { Tabs, Tab, Typography, Box, Container } from '@mui/material';

import FilterActions from './FilterActions';
import EfficiencyMatrix from './EfficiencyMatrix';
import DetailedTable from './DetailedTable';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function PostEventAnalysis() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <FilterActions />
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Efficiency Matrix" {...a11yProps(0)} />
            <Tab label="Detailed Table" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <EfficiencyMatrix />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DetailedTable />
        </TabPanel>
      </Box>
    </Box>
  );
}

import { useEffect, useContext, useMemo } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';

import { useAppSelector, useAppDispatch } from 'src/utils/hooks/useRedux';
import { SnackbarContext } from 'src/utils/providers/Snackbar';
import { fetchDetailedTable } from 'src/stores/detailedTable.slice';

const columns = [
  {
    field: 'id',
    headerName: 'Id',
    width: 90,
  },
  {
    field: 'volume',
    headerName: 'Volume',
    width: 150,
  },
  {
    field: 'brand',
    headerName: 'Brand',
    width: 150,
  },
  {
    field: 'mechanics',
    headerName: 'Mechanics',
    width: 150,
  },
  {
    field: 'promo_spend',
    headerName: 'Promo Spend(€)',
    width: 150,
  },
  {
    field: 'roi',
    headerName: 'ROI',
    width: 150,
  },
  {
    field: 'profit_waterfall_cpg_uplift',
    headerName: 'Volume Uplift',
    width: 150,
  },
  {
    field: 'sales_waterfall_cpg',
    headerName: 'Sales Uplift',
    width: 150,
  },
  {
    field: 'sales_waterfall_retailer',
    headerName: 'Margin Uplift',
    width: 150,
  },
];

export default function DetailedTable() {
  const { entities, error } = useAppSelector((state) => state.detailedTable);
  const { setAlertSeverity, trackMessage, showSnackbar } =
    useContext(SnackbarContext);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailedTable());
  }, []);

  useEffect(() => {
    if (error) {
      showSnackbar();
      setAlertSeverity('error');
      trackMessage(error.message);
    }
  }, [error]);

  const rows = useMemo(
    () =>
      entities?.promo_events?.map((data: any) => ({
        id: data.promo_id,
        volume: data.product_kpi.volume.toFixed(2),
        brand: 'brand 0',
        mechanics: `${data.price_mechanics.value} ${data.price_mechanics.unit}/${data.price_mechanics.value}`,
        roi: Number(
          data.product_kpi.profit_waterfall_cpg.execution_cost +
            data.product_kpi.profit_waterfall_retailer.execution_cost +
            data.product_kpi.sales_waterfall_cpg.execution_cost +
            data.product_kpi.sales_waterfall_retailer.execution_cost
        ).toFixed(2),
        promo_spend: data.promo_spend,
        profit_waterfall_cpg_uplift:
          data.product_kpi.profit_waterfall_cpg.uplift.toFixed(2),
        profit_waterfall_retailer:
          data.product_kpi.profit_waterfall_retailer.uplift.toFixed(2),
        sales_waterfall_cpg:
          data.product_kpi.sales_waterfall_cpg.uplift.toFixed(2),
        sales_waterfall_retailer:
          data.product_kpi.sales_waterfall_retailer.uplift.toFixed(2),
      })),
    []
  );

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25]}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
}

import { useState, useEffect, useContext } from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/utils/hooks/useRedux';
import useForm from 'src/utils/hooks/useForm';

const INITIAL_STATE = {
  myCalendar: '',
  retailer: '',
  category: '',
  brand: '',
  product: '',
};

export default function FilterActions() {
  const { state, handleChange } = useForm(INITIAL_STATE);
  const [btnEnable, setBtnEnable] = useState<boolean>(true);
  const { entities: refCalendar } = useAppSelector(
    (state) => state.refCalendar
  );
  const { entities: productData } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (state.brand && state.category && state.product && state.retailer)
      setBtnEnable(false);
  }, [state]);

  return (
    <Grid
      mb={3}
      container
      justifyContent={'center'}
      alignItems={'center'}
      spacing={{ md: 2, sm: 2, xs: 2 }}
    >
      <Grid item md={8} sm={0} xs={0}></Grid>
      <Grid item md={4} sm={12} xs={12}>
        <FormControl variant="standard" fullWidth>
          <Select
            name="myCalendar"
            value={state.myCalendar}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {refCalendar?.map(
              (item: {
                id: number;
                last_edited: string;
                name: string;
                status: string;
              }) => {
                return (
                  <MenuItem key={`${item.name}-${item.id}`} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} sm={6} xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="retailer_id">Retailer</InputLabel>
          <Select
            label="Retailer"
            name="retailer"
            value={state.retailer}
            onChange={handleChange}
            sx={{ bgcolor: 'white' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {productData?.products?.map(
              (item: {
                product_id: number;
                product_name: string;
                category_name: string;
                product_brand: string;
                size_units: string;
              }) => {
                return (
                  <MenuItem
                    key={item.size_units + item.product_id}
                    value={item.size_units}
                  >
                    {item.size_units}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} sm={6} xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="category_id">Category</InputLabel>
          <Select
            name="category"
            value={state.category}
            onChange={handleChange}
            label={'Category'}
            sx={{ bgcolor: 'white' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {productData?.products?.map(
              (item: {
                product_id: number;
                product_name: string;
                category_name: string;
                product_brand: string;
              }) => {
                return (
                  <MenuItem
                    key={item.category_name + item.product_id}
                    value={item.category_name}
                  >
                    {item.category_name}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} sm={6} xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="brand_id">Brand</InputLabel>
          <Select
            name="brand"
            value={state.brand}
            onChange={handleChange}
            label={'Brand'}
            sx={{ bgcolor: 'white' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {productData?.products?.map(
              (item: {
                product_id: number;
                product_name: string;
                category_name: string;
                product_brand: string;
              }) => {
                return (
                  <MenuItem
                    key={item.product_brand + item.product_id}
                    value={item.product_brand}
                  >
                    {item.product_brand}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} sm={6} xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="Product_id">Product</InputLabel>
          <Select
            label={'Product'}
            name="product"
            value={state.product}
            onChange={handleChange}
            sx={{ bgcolor: 'white' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {productData?.products?.map(
              (item: {
                product_id: number;
                product_name: string;
                category_name: string;
                product_brand: string;
              }) => {
                return (
                  <MenuItem
                    key={item.product_name + item.product_id}
                    value={item.product_name}
                  >
                    {item.product_name}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} sm={6} xs={6}>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: 55 }}
          disabled={btnEnable}
        >
          Apply Filters
        </Button>
      </Grid>
      <Grid item md={2} sm={6} xs={6}>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: 55 }}
          disabled={btnEnable}
        >
          Clear Filters
        </Button>
      </Grid>
    </Grid>
  );
}

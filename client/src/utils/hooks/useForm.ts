import { SelectChangeEvent } from '@mui/material';
import React, { useState, useCallback } from 'react';

export default function useForm(initialState: any) {
  const [state, setState] = useState(initialState);

  function handleChange(e: React.ChangeEvent | SelectChangeEvent) {
    const { value, name } = e.target as HTMLInputElement | HTMLSelectElement;
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return { state, handleChange };
}

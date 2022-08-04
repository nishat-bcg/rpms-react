import { createContext, useState, forwardRef, ReactNode } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export const SnackbarContext = createContext({
  open: false,
  setAlertSeverity: (text: 'success' | 'error') => {},
  showSnackbar: () => {},
  trackMessage: (text: string) => {},
});

interface Props {
  children?: ReactNode;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBarProvider({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState<string>('');

  function showSnackbar() {
    setOpen(true);
  }

  function closeSnackbar() {
    setOpen(false);
  }

  function trackMessage(text: string) {
    setMessage(text);
  }

  function setAlertSeverity(s: 'success' | 'error'): void {
    setSeverity(s);
  }

  return (
    <SnackbarContext.Provider
      value={{ open, showSnackbar, trackMessage, setAlertSeverity }}
    >
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
}

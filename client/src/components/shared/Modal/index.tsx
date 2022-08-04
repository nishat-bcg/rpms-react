import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAppDispatch, useAppSelector } from 'src/utils/hooks/useRedux';

import { closeModal } from 'src/stores/modal.slice';

interface ModalProps {
  children?: ReactNode;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  height: 600,
  minWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border: 'none',
  outline: 'none',
  p: 4,
  overflowY: 'scroll',
};

export default function CommonModal({ children }: ModalProps) {
  const { value } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Modal open={value} onClose={() => dispatch(closeModal())}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}

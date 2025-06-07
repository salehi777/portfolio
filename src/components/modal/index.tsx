import { Dialog, type DialogProps } from '@mui/material'

export default function Modal(props: DialogProps) {
  return <Dialog disableScrollLock fullWidth {...props} />
}

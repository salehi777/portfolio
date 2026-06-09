import {
  DialogActions,
  DialogContent,
  DialogTitle,
  type DialogProps,
} from '@mui/material'
import { StyledDialog } from './styles'

interface ModalProps extends Omit<DialogProps, 'title'> {
  title?: React.ReactNode
  actions?: React.ReactNode
  noContent?: boolean
}

export default function Modal({
  title,
  children,
  actions,
  noContent,
  ...props
}: ModalProps) {
  return (
    <StyledDialog
      fullWidth
      {...props}
      container={document.getElementById('root')?.firstElementChild}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {noContent ? children : <DialogContent>{children}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </StyledDialog>
  )
}

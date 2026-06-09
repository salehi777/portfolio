import { Toaster } from 'react-hot-toast'
import { useTheme } from '@mui/material'

export default function ToasterContainer() {
  const theme = useTheme()

  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        duration: 4000,

        success: {
          iconTheme: {
            primary: theme.palette.success.contrastText,
            secondary: theme.palette.success.main,
          },
          style: {
            background: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
        },

        error: {
          iconTheme: {
            primary: theme.palette.error.contrastText,
            secondary: theme.palette.error.main,
          },
          style: {
            background: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
        },
      }}
    />
  )
}

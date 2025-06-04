import { Box, GlobalStyles, keyframes, useTheme } from '@mui/material'

export default function SpreadableTheme({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            background: 'transparent',
          },
          '::view-transition-old(switch)': {
            animation: 'none',
          },
          '::view-transition-new(switch)': {
            animation: `${
              theme.direction === 'ltr' ? spreadLTR : spreadRTL
            } .4s linear`,
          },
        }}
      />
      <Box
        sx={{
          viewTransitionName: 'switch',
          background: (theme) => theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </>
  )
}

const spreadLTR = keyframes`
  from {
      clip-path: circle(0% at 99% 1%);
  }
  to {
      clip-path: circle(150% at 99% 1%);
  }
`

const spreadRTL = keyframes`
  from {
      clip-path: circle(0% at 1% 1%);
  }
  to {
      clip-path: circle(150% at 1% 1%);
  }
`

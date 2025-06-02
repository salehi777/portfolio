import { Box, GlobalStyles, keyframes } from '@mui/material'

export default function SpreadableTheme({
  children,
}: {
  children: React.ReactNode
}) {
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
            animation: `${spread} .4s linear`,
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

const spread = keyframes`
  from {
      clip-path: circle(0% at 28px 28px);
  }
  to {
      clip-path: circle(150% at 28px 28px);
  }
`

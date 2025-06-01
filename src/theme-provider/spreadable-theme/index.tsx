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
            animation: `${spread} 2s linear`,
          },
        }}
      />
      <Box
        sx={{
          viewTransitionName: 'switch',
          background: (theme) =>
            theme.palette.mode === 'light' ? 'white' : 'black',
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
      clip-path: circle(0% at 50% 50%);
  }
  to {
      clip-path: circle(100% at 50% 50%);
  }
`

import { Box, GlobalStyles, keyframes } from '@mui/material'

interface SpreadableThemeProps {
  children: React.ReactNode
}

export default function SpreadableTheme({ children }: SpreadableThemeProps) {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { background: 'transparent' },
          '::view-transition-old(switch)': { animation: 'none' },
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
          '@supports (min-height: 100dvh)': { minHeight: '100dvh' },
        }}
      >
        {children}
      </Box>
    </>
  )
}

const spread = keyframes`
  from {
    clip-path: circle(0px at var(--switch-x) var(--switch-y));
  }
  to {
    clip-path: circle(var(--switch-r) at var(--switch-x) var(--switch-y));
  }
`

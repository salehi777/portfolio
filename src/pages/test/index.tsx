import { StyledTest } from './styles'
import { Box, Button } from '@mui/material'

export default function TestPage() {
  return (
    <StyledTest>
      <Box p={20}>
        <Button>button</Button>
      </Box>
    </StyledTest>
  )
}

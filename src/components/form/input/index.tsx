import type { TextFieldProps } from '@mui/material'
import { StyledInput } from './styles'

export type InputProps = TextFieldProps & {}

export default function Input(props: InputProps) {
  return <StyledInput {...props} />
}

import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import { TextField, type TextFieldProps } from '@mui/material'
import { StyledInput } from './styles'

type InputProps = TextFieldProps & {
  name: string
  rules?: RegisterOptions
  label?: React.ReactNode
}

export default function Input({
  ref,
  sx,
  name,
  rules,
  label,
  ...props
}: InputProps) {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, ...field },
  } = useController({ name, control, rules, defaultValue: '' })

  return (
    <StyledInput ref={ref} sx={sx}>
      <label htmlFor={field.name}>{label}</label>
      <TextField
        inputRef={fieldRef}
        id={field.name}
        fullWidth
        {...field}
        {...props}
      />
    </StyledInput>
  )
}

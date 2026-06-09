import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import Input, { type InputProps } from '../input'

type RHFInputProps = InputProps & {
  name: string
  rules?: RegisterOptions
}

export default function RHFInput({
  name,
  rules,
  defaultValue = '',
  onChange,
  ...props
}: RHFInputProps) {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <Input
      inputRef={fieldRef}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      error={!!error}
      helperText={error ? error.message || 'This field is required' : undefined}
      {...field}
      {...props}
    />
  )
}

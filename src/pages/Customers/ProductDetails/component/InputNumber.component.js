import { TextField } from "@material-ui/core"

export function InputNumber(props) {
  const onChange = (event) => {
    const value = event.target.value
    props.onChange(value)
  }
  return (
    <TextField className={props.className}
      type='number'
      variant='outlined'
      defaultValue={1}
      onChange={onChange}
      InputProps={{ inputProps: { min: 1, max: props.max } }}
    />
  )
}

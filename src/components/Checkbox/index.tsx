import { CheckboxProps } from "../../types";
import { Indicator, Label, Input } from "./style";

export default function Checkbox({
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}: CheckboxProps) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}

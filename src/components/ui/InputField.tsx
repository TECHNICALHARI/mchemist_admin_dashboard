import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  control: Control<T>;
  disabled?: boolean;
  required?: boolean;
}

const InputField = <T extends FieldValues>({
  name,
  label,
  type = "text",
  placeholder,
  control,
  disabled = false,
  required = false,
}: InputFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...field} type={type} placeholder={placeholder} disabled={disabled} required={required} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default InputField;

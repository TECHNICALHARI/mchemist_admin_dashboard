import { Textarea } from "@/components/ui/textarea";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";

interface TextAreaFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  control: Control<T>;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const TextAreaField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  disabled = false,
  required = false,
  className
}: TextAreaFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea {...field} placeholder={placeholder} disabled={disabled} required={required} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default TextAreaField;

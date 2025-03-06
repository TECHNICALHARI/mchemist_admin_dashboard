import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface FileUploadFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const FileUploadField = <T extends FieldValues>({
  name,
  label,
  control,
  className,
  multiple = false,
  disabled = false,
  required = false,
}: FileUploadFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field: { onChange, value, ref } }) => (
      <FormItem className={className}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            ref={ref}
            type="file"
            multiple={multiple}
            disabled={disabled}
            required={required}
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              onChange(multiple ? files : files.length > 0 ? [files[0]] : []);
            }}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FileUploadField;

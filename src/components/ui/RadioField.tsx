import { Control, Controller } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioFieldProps {
  name: string;
  label: string;
  options: RadioOption[];
  control: Control<any>; 
}

const RadioField: React.FC<RadioFieldProps> = ({ name, label, options, control }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <RadioGroup onValueChange={field.onChange} value={field.value}>
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} />
                <span>{option.label}</span>
              </div>
            ))}
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default RadioField;

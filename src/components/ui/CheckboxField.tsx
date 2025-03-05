import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxFieldProps {
    name: string;
    label: string;
    control: any;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, label, control }) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
                <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>{label}</FormLabel>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default CheckboxField;

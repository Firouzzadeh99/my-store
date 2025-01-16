import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";

interface IProps {
  name: string;
  form: any;
  label?: string;
  description?: any;
}

export default function CheckboxField({
  form,
  name,
  description,
  label,
}: IProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2.5">
          <div className="flex items-center gap-1.5">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
    />
  );
}

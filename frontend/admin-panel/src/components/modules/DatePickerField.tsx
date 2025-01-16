import DatePickerInput from "../ui/DatePickerInput";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";

interface IProps {
  name: string;
  form: any;
  label?: string;
  description?: any;
}

export default function DatePickerField({
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
          <div className="flex flex-col gap-1.5">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <DatePickerInput
                value={field.value}
                onChange={field.onChange}
                placeholder="انتخاب تاریخ"
              />
            </FormControl>
          </div>
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
    />
  );
}

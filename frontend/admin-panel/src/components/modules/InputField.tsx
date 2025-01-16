import { FieldValues, UseFormReturn, Path } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface IProps<T extends FieldValues> {
  name: Path<T>;
  form: UseFormReturn<T>;
  label?: string;
  textarea?: boolean;
  placeholder: string;
  type?: string;
  description?: string;
  autofocus?:boolean;
}

export default function InputField<T extends FieldValues>({
  name,
  form,
  label,
  autofocus=false,
  textarea = false,
  placeholder,
  type = "text",
  description,
}: IProps<T>) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {textarea ? (
              <Textarea
                className="resize-none"
                placeholder={placeholder}
                {...field}
              />
            ) : (
              <Input autoFocus={autofocus} placeholder={placeholder} type={type} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

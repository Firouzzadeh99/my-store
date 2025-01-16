import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface IOption {
  label: string;
  value: any;
}

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface IProps<T extends FieldValues> {
  name: Path<T>;
  form: UseFormReturn<T>;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  options: IOption[];
  description?: string;
  height?: string;
}

export default function SelectField<T extends FieldValues>({
  name,
  form,
  label,
  disabled,
  placeholder = "انتخاب کنید",
  options,
  description,
  height,
}: IProps<T>) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={`${!label && "space-y-0"}`}>
          <FormLabel>{label}</FormLabel>
          <div className="relative">
            <Select
              dir="rtl"
              disabled={disabled}
              value={field.value || ""}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className={`${height}`}>
                {options.map((option, index) => (
                  <SelectItem value={option.value} key={index}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              className="w-5 h-5 absolute left-7 top-1/2 -translate-y-1/2 p-0 rounded-full z-10"
              variant="ghost"
              type="button"
              onClick={(e) => {
                e.preventDefault();

                field.onChange("");
              }}
            >
              <X size={15} />
            </Button>
          </div>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

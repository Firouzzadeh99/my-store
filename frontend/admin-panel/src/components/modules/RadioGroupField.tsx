import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface IProps {
  name: string;
  form: any;
  label?: string;
  options: { value: string; label: React.ReactNode | string }[];
  disabled?: boolean;
}

export default function RadioGroupField({
  form,
  name,
  label,
  options,
  disabled,
}: IProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              disabled={disabled}
              dir="rtl"
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              {options.map((item: any, index: number) => (
                <FormItem
                  className="flex items-center gap-1.5 space-y-0"
                  key={index}
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} id={item.value} />
                  </FormControl>
                  <FormLabel htmlFor={item.value}>{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

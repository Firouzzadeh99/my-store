import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "../ui/form";

interface IProps {
  name: string;
  form: any;
  label: string;
  description?: string;
}

export default function UploadField({
  name,
  form,
  label,
  description,
}: IProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        form.setValue(name, [...form.getValues(name), ...acceptedFiles], {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      }
    },
    [form, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <FormField
      name={name}
      control={form.control}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`h-[100px] flex justify-center items-center text-sm font-medium border border-solid border-border rounded-lg cursor-pointer ${
                isDragActive && "bg-gray-100"
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>فایل‌ها را اینجا رها کنید...</p>
              ) : (
                <p className="p-2.5 text-center">
                  فایل‌ها را بکشید و اینجا رها کنید، یا برای انتخاب فایل‌ها کلیک
                  کنید
                </p>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

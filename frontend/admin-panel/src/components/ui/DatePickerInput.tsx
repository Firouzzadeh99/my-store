import React, { useState, useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

interface DatePickerInputProps {
  value?: string | DateObject;
  onChange?: (value: string) => void; 
  placeholder?: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  value,
  onChange,
  placeholder = "انتخاب تاریخ",
}) => {
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null);

  useEffect(() => {
    if(!value){
        setSelectedDate(null);
      return;
    }
    if (value) {
      const date = new DateObject({
        date: value,
        calendar: gregorian,
        locale: gregorian_en,
      })
        .convert(persian)
        .setLocale(persian_fa);

      setSelectedDate(date);
    }
  }, [value]);

  const handleDateChange = (date: DateObject) => {
    const gregorianDate = date.convert(gregorian).setLocale(gregorian_en);
    const formattedDate = gregorianDate.format("YYYY-MM-DD");

    setSelectedDate(date.convert(persian).setLocale(persian_fa));

    if (onChange) onChange(formattedDate);
  };

  return (
    <div className="w-full">
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        placeholder={placeholder}
        style={{ width: "100%", height: "100%", padding: "6px" }}
      />
    </div>
  );
};

export default DatePickerInput;

import { FC, KeyboardEvent, useState } from "react";
import {
  FieldError,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import clsx from "clsx";

interface CheckboxProps {
  className?: string;
  register: UseFormRegister<any>;
  options?: RegisterOptions<any>;
  watch?: UseFormWatch<any>;
  setValue?: UseFormSetValue<any>;
  fieldError?: FieldError;
  required?: boolean;
  pattern?: RegExp;
  name: string;
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  className,
  register,
  options,
  watch,
  setValue,
  fieldError,
  required,
  name,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCheckboxValue = () => {
    if (setValue && watch) {
      setValue(name, !watch(name));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === "Enter") {
      handleCheckboxValue();
      e.preventDefault();
    }
  };

  return (
    <div
      className={clsx(
        className,
        fieldError && "checkbox--error",
        isFocused && "checkbox--focused"
      )}
    >
      {label && <label htmlFor={name}>{label + (required ? "*" : "")}</label>}
      <input
        {...register(name, options)}
        id={name}
        type="checkbox"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleCheckboxValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Checkbox;

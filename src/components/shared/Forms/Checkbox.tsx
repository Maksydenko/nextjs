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
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  register: UseFormRegister<any>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  options?: RegisterOptions<any>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  watch?: UseFormWatch<any>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
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

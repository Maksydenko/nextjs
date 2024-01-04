import { FC } from "react";
import {
  FieldError,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import clsx from "clsx";
import Checkbox from "./Checkbox";

interface FieldProps {
  className?: string;
  register: UseFormRegister<any>;
  watch?: UseFormWatch<any>;
  setValue?: UseFormSetValue<any>;
  fieldError?: FieldError;
  required?: boolean;
  pattern?: RegExp;
  message?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
}

const Field: FC<FieldProps> = ({
  className,
  register,
  watch,
  setValue,
  fieldError,
  required,
  pattern,
  message = "",
  name,
  type,
  label,
  placeholder,
}) => {
  const options: RegisterOptions<any> | undefined = {
    required,
  };

  const isCheckbox = type === "checkbox";
  const isTextarea = type === "textarea";

  if (pattern) {
    options.pattern = {
      value: pattern,
      message,
    };
  }

  if (isCheckbox) {
    return (
      <Checkbox
        className={className}
        register={register}
        watch={watch}
        setValue={setValue}
        fieldError={fieldError}
        name={name}
        label={label}
      />
    );
  }
  return (
    <div
      className={clsx(
        className,
        "field",
        isTextarea && "field--textarea",
        fieldError && "field--error"
      )}
    >
      {label && <label htmlFor={name}>{label + (required ? "*" : "")}</label>}
      {isTextarea ? (
        <textarea
          {...register(name, options)}
          id={name}
          placeholder={placeholder + (required ? "*" : "")}
        />
      ) : (
        <input
          {...register(name, options)}
          id={name}
          type={type}
          {...(placeholder && {
            placeholder: placeholder + (required ? "*" : ""),
          })}
        />
      )}
    </div>
  );
};

export default Field;

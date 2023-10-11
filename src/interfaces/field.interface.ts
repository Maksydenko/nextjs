import { FieldError } from "react-hook-form";

export interface IField<T> {
  fieldError: FieldError | undefined;
  required: boolean;
  pattern?: RegExp;
  name: T;
  type: string;
  label: string;
  placeholder?: string;
}

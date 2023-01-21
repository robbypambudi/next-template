import * as React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  className?: string;
} & UseFormProps<TFormValues>;

const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  className,
  ...rest
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>(rest);

  return (
    <div className={className}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children(methods)}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;

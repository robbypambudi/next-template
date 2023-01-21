import * as React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  className?: string;
};

const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  className,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({});
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

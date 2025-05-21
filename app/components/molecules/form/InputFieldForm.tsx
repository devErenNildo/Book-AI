import { UseFormRegisterReturn } from 'react-hook-form';
import LabelForm from '../../atoms/form/LabelFrom';
import InputForm from '../../atoms/form/InputForm';
import ErrorMessage from '../../atoms/form/ErrorMessageForm';

interface Props {
  label: string;
  id: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

export default function InputFieldForm({ label, id, error, registration }: Props) {
  return (
    <div>
      <LabelForm htmlFor={id}>{label}</LabelForm>
      <InputForm id={id} {...registration} />
      <ErrorMessage message={error} />
    </div>
  );
}

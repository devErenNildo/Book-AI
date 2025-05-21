import { UseFormRegisterReturn } from 'react-hook-form';
import LabelForm from '../../atoms/form/LabelFrom';
import TextArea from '../../atoms/form/TextAreaForm';
import ErrorMessage from '../../atoms/form/ErrorMessageForm';

interface Props {
  label: string;
  id: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

export default function TextAreaFieldForm({ label, id, error, registration }: Props) {
  return (
    <div>
      <LabelForm htmlFor={id}>{label}</LabelForm>
      <TextArea id={id} rows={4} {...registration} />
      <ErrorMessage message={error} />
    </div>
  );
}

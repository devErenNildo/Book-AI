import { UseFormRegisterReturn } from 'react-hook-form';
import LabelForm from '../../atoms/form/LabelFrom';
import SelectOptionForm from '../../atoms/form/SelectOptionForm';
import ErrorMessage from '../../atoms/form/ErrorMessageForm';

interface SelectFieldProps {
    id: string;
    label: string;
    options: { value: string; label: string }[];
    error?: string;
    registration: UseFormRegisterReturn;
}

export default function SelectField({
    id,
    label,
    options,
    error,
    registration,
}: SelectFieldProps) {
    return (
        <div>
            <LabelForm htmlFor={id}>{label}</LabelForm>
            <SelectOptionForm id={id} {...registration}>
                <option value="">Selecione uma opção</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </SelectOptionForm>
            <ErrorMessage message={error} />
        </div>
    );
}

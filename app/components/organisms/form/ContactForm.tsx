'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputFieldForm from '../../molecules/form/InputFieldForm';
import TextAreaFieldForm from '../../molecules/form/TextAreaFieldForm';
import SelectOptionForm from '../../atoms/form/SelectOptionForm';
import ButtonForm from '../../atoms/form/ButtonForm';
import { ContactFormData, contactSchema } from './ContactForm.Validator';
import SelectField from '../../molecules/form/SelectFieldForm';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
            <InputFieldForm
                id="name"
                label="Nome"
                error={errors.name?.message}
                registration={register('name')}
            />

            <InputFieldForm
                id="email"
                label="Email"
                error={errors.email?.message}
                registration={register('email')}
            />

            {/* <SelectField
                id="subject"
                label="Assunto"
                options={subjectOptions}
                error={errors.subject?.message}
                registration={register('subject')}
            /> */}

            <TextAreaFieldForm
                id="message"
                label="Mensagem"
                error={errors.message?.message}
                registration={register('message')}
            />

            <ButtonForm type="submit" loading={isSubmitting}>
                Enviar
            </ButtonForm>
        </form>
    );
}
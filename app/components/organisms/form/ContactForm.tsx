'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputFieldForm from '../../molecules/form/InputFieldForm';
import TextAreaFieldForm from '../../molecules/form/TextAreaFieldForm';
import ButtonForm from '../../atoms/form/ButtonForm';
import { ContactFormData, contactSchema } from './ContactForm.Validator';
import SelectField from '../../molecules/form/SelectFieldForm';
import ImageBanner from '../../atoms/heroBanner/ImageBanner';
import image from "@/public/ajuda.png";

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
        <section className="flex flex-1 flex-col-reverse md:flex-row items-center justify-center min-h-screen w-full gap-20">
            <ImageBanner image={image} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md p-6 bg-background rounded-xl space-y-4 shadow-lg shadow-foreground/50 md:w-1/2"
            >
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

                <SelectField
                    id="subject"
                    label="Assunto"
                    options={[
                        { value: '', label: 'Selecione um assunto' },
                        { value: 'duvida', label: 'Dúvida' },
                        { value: 'sugestao', label: 'Sugestão' },
                        { value: 'outro', label: 'Outro' },
                    ]}
                    error={errors.subject?.message}
                    registration={register('subject')}
                />

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
        </section>
    );
}
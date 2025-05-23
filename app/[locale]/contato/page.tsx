import ContactForm from "@/app/components/organisms/form/ContactForm";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("ContactPage");

    return (
        <main className="mt-20 md:mt-0.5">
            <ContactForm
                nameLabel={t("nameLabel")}
                emailLabel={t("emailLabel")}
                subjectLabel={t("subjectLabel")}
                messageLabel={t("messageLabel")}
                buttonText={t("buttonText")}
                subjectOptions={[
                    { value: '', label: t("subjectOptions.select") },
                    { value: 'duvida', label: t("subjectOptions.duvida") },
                    { value: 'sugestao', label: t("subjectOptions.sugestao") },
                    { value: 'outro', label: t("subjectOptions.outro") },
                ]}
            />
        </main>
    );
}

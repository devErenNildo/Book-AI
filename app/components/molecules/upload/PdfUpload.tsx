import Label from "../../atoms/upload/Label";
import FileInput from "../../atoms/upload/FileInput";

interface PdfUploadInputProps {
    onFileChange: (file: File | null) => void;
}
export default function PdfUploadInput({ onFileChange }: PdfUploadInputProps) {
    return (
        <div>
            <Label>Arquivo PDF</Label>
            <FileInput accept="application/pdf" onChange={(e) => onFileChange(e.target.files?.[0] || null)} />
        </div>
    );
}

import { useState } from "react";
import Label from "../../atoms/upload/Label";
import FileInput from "../../atoms/upload/FileInput";

interface CoverUploadProps {
    onFileChange: (file: File | null, preview: string | null) => void;
}
export default function CoverUpload({ onFileChange }: CoverUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);

    return (
        <div>
            <Label>Capa do livro</Label>
            <FileInput
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    const url = file ? URL.createObjectURL(file) : null;
                    setPreview(url);
                    onFileChange(file, url);
                }}
            />
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 w-32 h-44 object-cover rounded-md border border-purple-500"
                />
            )}
        </div>
    );
}

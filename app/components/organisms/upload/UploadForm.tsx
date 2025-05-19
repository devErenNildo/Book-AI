"use client";

import { useState } from "react";
import { db, storage, auth } from "@/app/config/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import CoverUpload from "../../molecules/upload/CoverUpload";
import PdfUploadInput from "../../molecules/upload/PdfUpload";
import Label from "../../atoms/upload/Label";
import TextInput from "../../atoms/upload/TextInput";
import TextArea from "../../atoms/upload/TextAreaProps";
import ButtonInput from "../../atoms/upload/ButtonInput";

export default function UploadForm() {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [coverFile, setCoverFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!pdfFile || !coverFile || !auth.currentUser) return;
        setLoading(true);

        try {
            const coverRef = ref(storage, `covers/${Date.now()}-${coverFile.name}`);
            await uploadBytes(coverRef, coverFile);
            const coverURL = await getDownloadURL(coverRef);

            const pdfRef = ref(storage, `pdfs/${Date.now()}-${pdfFile.name}`);
            await uploadBytes(pdfRef, pdfFile);
            const pdfURL = await getDownloadURL(pdfRef);

            const user = auth.currentUser;

            await addDoc(collection(db, "pdfs"), {
                title,
                author,
                description,
                coverURL,
                pdfURL,
                createdAt: Timestamp.now(),
                userName: user.displayName || "Anônimo",
                userPhoto: user.photoURL,
                userId: user.uid,
                likes: 0,
                tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
            });

            alert("Livro enviado com sucesso!");
            setPdfFile(null);
            setCoverFile(null);
            setTitle("");
            setAuthor("");
            setDescription("");
            setTags("");
        } catch (err) {
            console.error("Erro no upload:", err);
            alert("Erro ao enviar o livro.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-foreground w-full max-w-2xl rounded-xl shadow-lg p-6 space-y-4 border border-purple-800">
            <h2 className="text-2xl font-bold text-purple-400">Enviar novo livro</h2>

            <CoverUpload onFileChange={(file) => setCoverFile(file)} />
            <PdfUploadInput onFileChange={(file) => setPdfFile(file)} />

            <div>
                <Label>Nome do livro</Label>
                <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <Label>Autor</Label>
                <TextInput value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div>
                <Label>Descrição</Label>
                <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div>
                <Label>Tags (separadas por vírgula)</Label>
                <TextInput value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Ex: Tecnologia, IA, Inovação" />
            </div>

            <ButtonInput onClick={handleUpload} disabled={loading} loading={loading}>
                Enviar livro
            </ButtonInput>
        </div>
    );
}

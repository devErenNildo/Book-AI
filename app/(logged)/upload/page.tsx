import UploadForm from "@/app/components/organisms/upload/UploadForm";
// import UploadPage from "@/app/components/PdfUpload";

export default function Upload() {
    return (
        <div className="ml-64 w-full min-h-screen bg-background text-text flex justify-center items-center p-6">
            <UploadForm />
        </div>
    );
}
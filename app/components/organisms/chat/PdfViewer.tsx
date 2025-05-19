interface PdfViewerProps {
    url: string | null;
}

export default function PdfViewer({ url }: PdfViewerProps) {
    return (
        <div className="w-1/2 p-4 border-r border-gray-800 bg-[#1a1a2e]">
            <h2 className="text-lg font-bold mb-4 text-purple-400">Visualização do PDF</h2>
            {url ? (
                <iframe src={url} className="w-full h-[80vh] rounded-lg" title="PDF Viewer" />
            ) : (
                <p>Carregando PDF...</p>
            )}
        </div>
    );
}
